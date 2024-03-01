import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import DisclaimerCard from '../components/DisclaimerCard';

const TermsCondition = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll the window to the top
    }, []);

    const data = [
        {
            "heading": "AL HATHAIFA GROUP DISCLAIMER",
            "description1": `"The information transmitted is intended only for the person or entity to rely on the information.,which it is addressed to and may contain privileged material. Please do not copy or deliver this message. Al-Hathaifa accepts no liability for any damage caused by this website information due to viruses, interference, interception, corruption or any unauthorized access."`,
            "description2": `The information provided by Al Hathaifa Group (“Company”, “we”, “our”, “us”) on https://al-hathaifa.com/ (the “Site”) is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.`,
            "description3": `UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.`,
        },
    ]
    return (
        <div>
            <Banner
                heading="Terms And Condition"
                description=""
            />

            {
                data.map((desData, index) => (
                    <DisclaimerCard
                        pageData={desData}
                    />
                ))
            }

            <Footer />
        </div>
    )
}

export default TermsCondition