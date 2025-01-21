import { useEffect } from "react";
import { useSearchableContent } from "../context/SearchableContentContext";

export const useRegisterTextContent = (
  route: string,
  text: string,
  title: string
) => {
  const { addSearchableContent, searchableContent } = useSearchableContent();

  useEffect(() => {
    const isAlreadyRegistered = searchableContent.some(
      (content) => content.route === route && content.text === text
    );

    if (!isAlreadyRegistered) {
      // console.log(`Registering content for ${route}:`, text);
      addSearchableContent(route, text, title);
    }
  }, [addSearchableContent, route, text, title, searchableContent]);
};
