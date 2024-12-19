import { useState } from "react";
import { Box, Image, Skeleton, Text, Card, CardBody } from "@chakra-ui/react";

const SocialPreview = ({ url }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useState(() => {
    const fetchOgImage = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`https://api.microlink.io?url=${encodeURIComponent(url)}`);
        const data = await response.json();
        
        if (data.data?.image?.url) {
          setImageUrl(data.data.image.url);
        } else {
          setError("No preview image available");
        }
      } catch (err) {
        setError("Failed to load preview");
        console.error("Error fetching OG image:", err);
      } finally {
        setIsLoading(false);
      }
    };

    if (url) {
      fetchOgImage();
    }
  }, [url]);

  return (
    <Card>
      <CardBody>
        {isLoading ? (
          <Skeleton height="200px" />
        ) : error ? (
          <Text color="red.500">{error}</Text>
        ) : (
          <Image
            src={imageUrl}
            alt="Social preview"
            fallback={<Text>No preview available</Text>}
            objectFit="cover"
            width="100%"
            height="200px"
          />
        )}
      </CardBody>
    </Card>
  );
};

export default SocialPreview;