import React, { useState } from "react"
import PropTypes from "prop-types"

const Feedback = () => {
    return (
        <div data-aos="zoom-out" className="pt-24 max-w-[83%] mx-auto">
            <section className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] md:pt-[100px]">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                                {/* <span className="mb-2 block text-lg font-semibold text-primary">FAQ</span> */}
                                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                                    Any Questions? Look Here
                                </h2>
                                {/* <p className="text-base text-body-color dark:text-dark-6">
                                    There are many variations of passages of Lorem Ipsum available but the majority have suffered
                                    alteration in some form.
                                </p> */}
                            </div>
                        </div>
                    </div>

                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4 lg:w-1/2">
                            <AccordionItem
                                header="How do I search for properties on Urban Nest?"
                                text="To search for properties on Urban Nest, simply navigate to the search bar on the homepage. You can enter keywords such as location, property type, price range, and more to filter your search results. Additionally, you can use the advanced search filters to refine your search based on specific criteria."
                            />
                            <AccordionItem
                                header="Are the listings on Urban Nest up-to-date?"
                                text="Yes, we strive to keep our listings as up-to-date as possible. Our team regularly updates the website with new listings and removes properties that have been sold or taken off the market. However, we recommend contacting the listing agent directly for the most current information about a property."
                            />
                            <AccordionItem
                                header="How can I schedule a property viewing?"
                                text="To schedule a property viewing, simply click on the 'Schedule Viewing' button located on the listing page of the property you're interested in. Fill out the required information, and the listing agent will contact you to arrange a convenient time for the viewing."
                            />
                            <AccordionItem
                                header="Do you offer virtual property tours?"
                                text="Yes, we offer virtual property tours for select listings. Look for the 'Virtual Tour' option on the listing page to explore the property virtually. If a virtual tour is not available for a particular property, feel free to contact the listing agent for alternative viewing options."
                            />
                            <AccordionItem
                                header="How do I get in touch with a real estate agent?"
                                text="You can easily get in touch with a real estate agent by filling out the contact form on the listing page of a property you're interested in. Alternatively, you can find the contact information of the listing agent displayed on the property details page. Don't hesitate to reach out with any questions or to schedule a viewing."
                            />
                        </div>
                        <div className="w-full px-4 lg:w-1/2">
                            <AccordionItem
                                header="What should I consider when buying a property?"
                                text="When buying a property, it's important to consider factors such as location, budget, property type, amenities, and future resale value. Our experienced real estate agents are here to guide you through the buying process and provide expert advice tailored to your specific needs and preferences."
                            />
                            <AccordionItem
                                header="Do you offer assistance with mortgage financing?"
                                text="While we do not directly offer mortgage financing, we can connect you with trusted mortgage lenders who can help you secure financing for your home purchase. Our goal is to provide you with comprehensive support throughout the homebuying process, including assistance with mortgage financing options."
                            />
                            <AccordionItem
                                header="Purchasing property: extra fees or costs?"
                                text="In addition to the purchase price of the property, there may be additional fees and costs involved in the homebuying process, such as closing costs, property taxes, homeowner association (HOA) fees, and insurance premiums. Our real estate agents can provide you with a detailed breakdown of these costs and answer any questions you may have."
                            />
                            <AccordionItem
                                header="Can I list my property for sale on Urban Nest?"
                                text="Yes, if you're interested in listing your property for sale on Urban Nest, please contact us through our website or reach out to one of our real estate agents directly. We'll be happy to discuss your listing options and provide you with personalized assistance to help you sell your property quickly and efficiently."
                            />
                            <AccordionItem
                                header="Is my personal information secure on Urban Nest?"
                                text="Yes, we take the security and privacy of your personal information seriously. Our website employs industry-standard security measures to protect your data from unauthorized access, use, or disclosure. You can browse and interact with our website with confidence, knowing that your information is safe and secure."
                            />
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 right-0 z-[-1]">
                    <svg width="1440" height="886" viewBox="0 0 1440 886" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            opacity="0.5"
                            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
                            fill="url(#paint0_linear)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear"
                                x1="1308.65"
                                y1="1142.58"
                                x2="602.827"
                                y2="-418.681"
                                gradientUnits="userSpaceOnUse">
                                <stop stopColor="#3056D3" stopOpacity="0.36" />
                                <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
                                <stop offset="1" stopColor="#F5F2FD" stopOpacity="0.096144" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </section>
        </div>
    )
}

export default Feedback

const AccordionItem = ({ header, text }) => {
    const [active, setActive] = useState(false)

    const handleToggle = () => {
        event.preventDefault()
        setActive(!active)
    }
    return (
        <div className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8">
            <button className={`faq-btn flex w-full text-left`} onClick={() => handleToggle()}>
                <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
                    <svg
                        className={`fill-primary stroke-primary duration-200 ease-in-out ${active ? "rotate-180" : ""}`}
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                            fill=""
                            stroke=""
                        />
                    </svg>
                </div>

                <div className="w-full">
                    <h4 className="mt-1 text-lg font-semibold text-dark dark:text-white">{header}</h4>
                </div>
            </button>

            <div className={`pl-[62px] duration-200 ease-in-out ${active ? "block" : "hidden"}`}>
                <p className="py-3 text-base leading-relaxed text-body-color dark:text-dark-6">{text}</p>
            </div>
        </div>
    )
}

AccordionItem.propTypes={
    header: PropTypes.string,
    text: PropTypes.string
}