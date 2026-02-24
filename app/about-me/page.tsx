import EducationCourses from '@/components/about-me/EducationCourses'
import Hero from '@/components/about-me/Hero'
import MyJourney from '@/components/about-me/MyJourney'
import SkillSet from '@/components/about-me/SkillSet'
import WorkHistory from '@/components/about-me/WorkHistory'
import Portfolio from '@/components/common/Portfolio'
import Toolbox from '@/components/common/Toolbox'
import React from 'react'

const page = () => {
    return (
        <div>
            <Hero />
            <div className="px-5">
                <div className="flex flex-col gap-[138px] py-25 max-w-[960px] mx-auto">
                    <MyJourney />
                    <WorkHistory />
                    <EducationCourses />
                    <SkillSet />
                </div>
            </div>
            <Toolbox />
            <Portfolio />
        </div>
    )
}

export default page