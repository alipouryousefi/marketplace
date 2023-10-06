import { CourseList } from "@/components/course"
import { Hero } from "@/components/common"
import { BaseLayout } from "@/components/layout"
import { getAllCourse } from "@/content/courses/fetcher"


export default function Home({ courses }) {
  return (
    <>
      <Hero />
      <CourseList courses={courses} />
    </>
  )
}

export function getStaticProps() {
  const { data } = getAllCourse()
  return {
    props: {
      courses: data
    }
  }
}



Home.Layout = BaseLayout