import { Modal } from "@/components/common";
import { CourseHero, Curriculum, KeyPoints } from "@/components/course";
import { BaseLayout } from "@/components/layout";
import { getAllCourse } from "../../content/courses/fetcher"

export default function Course({ course }) {

    return (
        <>
            <div className="py-4">
                <CourseHero
                    title={course.title}
                    description={course.description}
                    image={course.coverImage}
                />
            </div>
            <KeyPoints
                points={course.wsl}
            />
            <Curriculum
                locked={true}
            />
            <Modal />
        </>
    )
}

export function getStaticPaths() {
    const { data } = getAllCourse()

    return {
        paths: data.map(c => ({
            params: {
                slug: c.slug
            }
        })),
        fallback: false
    }
}


export function getStaticProps({ params }) {
    const { data } = getAllCourse()
    const course = data.filter(c => c.slug === params.slug)[0]

    return {
        props: {
            course
        }
    }
}

Course.Layout = BaseLayout