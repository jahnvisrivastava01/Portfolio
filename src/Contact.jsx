export default function Contact() {
    return(
        <section id="contact" className="scroll-mt-24 px-6 py-24 text-white">

            <h2 className="text-3xl font-bold text-center mb-12">
                Let's <span className="text-purple-400">Connect</span>
            </h2>

            <div className="max-w-xl mx-auto bg-white/5 backdrop-blur-lg border border-gray-700 rounded-xl p-8">
               <form className="flex flex-col gap-5">
                    <input type="text" placeholder="Your Name" className="p-3 rounded-lg bg-black/40 border border-gray-600 outline-none focus:border-purple-400"
                    
                    />

                    <input type="email" placeholder="Your Email" className="p-3 rounded-lg bg-black/40 border border-gray-600 outline-none focus:border-purple-400"
                    />

                    <input type="tel" placeholder="Phone Number" className="p-3 rounded-lg bg-black/40 border border-gray-600 outline-none focus:border-purple-400"/>

                    <textarea placeholder="What kind of work required?"
                        rows="4"
                        className="p-3 rounded-lg bg-black/40 border border-gray-600 outline-none focus:border-purple-400">

                    </textarea>

                    <button type="submit" className="p-3 rounded-lg bg-black/40 border border-gray-600 outline-none focus:border-purple-400"> Send Message</button>

               </form>
            </div>
        </section>
    )
}