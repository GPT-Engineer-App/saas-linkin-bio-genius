import { useState, useEffect } from "react";
import { Box, Card, CardHeader, CardBody, Heading, Skeleton } from "@chakra-ui/react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const SocialGraph = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mockData = [
          { name: "Jan", followers: 4000 },
          { name: "Feb", followers: 3000 },
          { name: "Mar", followers: 5000 },
          { name: "Apr", followers: 4500 },
          { name: "May", followers: 6000 },
          { name: "Jun", followers: 7000 },
        ];
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        setData(mockData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching social data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      maxW="4xl"
      mx="auto"
      p={4}
    >
      <Card
        bg="white"
        _dark={{ bg: "gray.900" }}
        borderWidth="1px"
        borderColor="gray.200"
        _dark={{ borderColor: "gray.800" }}
        boxShadow="lg"
        backdropFilter="blur(8px)"
      >
        <CardHeader>
          <Heading size="lg" color="gray.900" _dark={{ color: "gray.100" }}>
            Social Growth
          </Heading>
        </CardHeader>
        <CardBody>
          {isLoading ? (
            <Box h="300px">
              <Skeleton height="100%" />
            </Box>
          ) : (
            <Box h="300px">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                  <XAxis 
                    dataKey="name" 
                    stroke="#6B7280"
                    fontSize={12}
                    tickLine={false}
                  />
                  <YAxis 
                    stroke="#6B7280"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      border: "1px solid #E5E7EB",
                      borderRadius: "6px",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="followers" 
                    stroke="#10B981" 
                    strokeWidth={2}
                    dot={{ fill: "#10B981", strokeWidth: 2 }}
                    activeDot={{ r: 6, fill: "#10B981", stroke: "#fff", strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          )}
        </CardBody>
      </Card>
    </Box>
  );
};

export default SocialGraph;