import EducationCourses from '@/components/about-me/EducationCourses'
import Hero from '@/components/about-me/Hero'
import MyJourney from '@/components/about-me/MyJourney'
import SkillSet from '@/components/about-me/SkillSet'
import WorkHistory from '@/components/about-me/WorkHistory'
import Portfolio from '@/components/common/Portfolio'
import Toolbox from '@/components/common/Toolbox'

const page = () => {
    return (
        <div>
            <Hero />
            <div className="px-5">
                <div className="flex flex-col gap-10 py-12 sm:gap-15 sm:py-17 md:gap-25 md:py-25 lg:gap-[138px] lg:py-25 max-w-[960px] mx-auto">
                    <MyJourney />
                    <WorkHistory />
                    {/* <EducationCourses /> */}
                    <SkillSet />
                </div>
            </div>
            <Toolbox />
            <Portfolio />
        </div>
    )
}

export default page