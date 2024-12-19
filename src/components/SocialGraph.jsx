import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

const SocialGraph = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulated API call with mock data
        const mockData = [
          { name: "Jan", followers: 4000 },
          { name: "Feb", followers: 3000 },
          { name: "Mar", followers: 5000 },
          { name: "Apr", followers: 4500 },
          { name: "May", followers: 6000 },
          { name: "Jun", followers: 7000 },
        ];
        
        // Simulate network delay
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-4xl mx-auto p-4"
    >
      <Card className="backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Social Growth
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="w-full h-[300px]">
              <Skeleton className="w-full h-full" />
            </div>
          ) : (
            <div className="w-full h-[300px]">
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
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SocialGraph;