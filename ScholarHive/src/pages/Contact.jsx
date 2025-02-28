import {FaEnvelope, FaPhone, FaMapMarkerAlt} from "react-icons/fa"


const Contact=()=>{
    return (
        <>
            <div className="max-w-6xl mx-auto px-6 py-16 text-gray-800">
                {/* Headers */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
                    <p className="text-gray-600 text-lg">Have questions? Reach out to us, and we'll get back to you soon.</p>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="border rounded-lg flex flex-col items-center space-y-2 p-6 shadow-sm hover:shadow-md">
                        <FaEnvelope className="text-3xl text-blue-600"/>
                        <h2 className="text-xl font-semibold">Our Address</h2>
                        <p className="text-md text-gray-600">123 road, Agartala, Tripura, India</p>
                    </div>
                    <div className="border rounded-lg flex flex-col items-center space-y-2 p-6 shadow-sm hover:shadow-md">
                        <FaPhone className="text-3xl text-blue-600"/>
                        <h2 className="text-xl font-semibold">Phone</h2>
                        <p className="text-md text-gray-600">+91 70053 72986</p>
                    </div>
                    <div className="border rounded-lg flex flex-col items-center space-y-2 p-6 shadow-sm hover:shadow-md">
                        <FaMapMarkerAlt className="text-3xl text-blue-600"/>
                        <h2 className="text-xl font-semibold">Email</h2>
                        <p className="text-md text-gray-600">rajesh1585700@gmail.com</p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="text-center bg-gray-100 p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
                    <form className="space-y-4">
                        <input 
                            type="text" 
                            placeholder="Your Name" 
                            className="w-full border rounded-lg p-3"
                        />
                        <input 
                            type="text" 
                            placeholder="Your Email" 
                            className="w-full border rounded-lg p-3"
                        />
                        <textarea
                            type="text"
                            rows="4"
                            placeholder="Your Message" 
                            className="w-full border rounded-lg p-3"
                        />
                        <button type="submit" className="w-full px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Send Message</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact