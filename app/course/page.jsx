"use client";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { courses_Udemy, courses_Alura, courses_DioMe, courses_DankiCode } from "./courseData";
import CourseCard from "./CourseCard";

const Course = () => {
  const transitionSettings = { delay: 2.4, duration: 0.5, ease: "easeIn" };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: transitionSettings }}
    >
      <div className="container mx-auto mb-10 p-2">
        <Tabs defaultValue="udemy" className="flex flex-col gap-10">
          <TabsList className="flex space-x-4 w-full max-w-md">
            <TabsTrigger
              value="udemy"
              className="whitespace-nowrap px-4 py-2 text-sm"
            >
              Udemy
            </TabsTrigger>
            <TabsTrigger
              value="alura"
              className="whitespace-nowrap px-4 py-2 text-sm"
            >
              Alura
            </TabsTrigger>
            <TabsTrigger
              value="dio"
              className="whitespace-nowrap px-4 py-2 text-sm"
            >
              Dio.me
            </TabsTrigger>
            <TabsTrigger
              value="danki"
              className=" whitespace-nowrap px-4 py-2 text-sm"
            >
              Danki
            </TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="udemy" className="w-full">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {courses_Udemy.map((item, index) => (
                  <CourseCard key={index} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="alura" className="w-full">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {courses_Alura.map((item, index) => (
                  <CourseCard key={index} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="dio" className="w-full">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {courses_DioMe.map((item, index) => (
                  <CourseCard key={index} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="danki" className="w-full">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {courses_DankiCode.map((item, index) => (
                  <CourseCard key={index} item={item} />
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Course;
