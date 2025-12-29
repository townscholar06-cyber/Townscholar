import React, { useState } from "react";
import { motion } from "framer-motion";

import linkedin from "../assets/images/li.png";
import instagram from "../assets/images/ig.png";
import youtube from "../assets/images/yt.png";
import profile from "../assets/images/epaphra.png";
import dp from "../assets/images/epaphra-dp.png";

export default function Founder() {
  const [readMore, setReadMore] = useState(false);

  return (
    <section className="w-full bg-[#fafafa] py-16">
      <div className="max-w-6xl mx-auto px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8">
        {/* LEFT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Meet your mentor */}
          <div className="border rounded-2xl p-8 bg-white">
            <h2 className="text-4xl leading-tight font-handwritten text-black">
              meet <br /> your <br /> mentor
            </h2>
          </div>

          {/* YOUTUBE */}
          <motion.a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="relative flex items-center space-x-5 rounded-full border-2 border-[#FF0000] bg-white pr-8 "
          >
            {/* Icon */}
            <div className=" w-24 h-24 rounded-full flex items-center justify-center">
              <img src={youtube} alt="YouTube" className="w-full h-full" />
            </div>

            {/* Text */}
            <div>
              <p className="text-3xl font-extrabold">740K+</p>
              <p className="text-xl text-gray-700">Subscribers</p>
            </div>
          </motion.a>

          {/* INSTAGRAM */}
          <motion.a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="relative flex items-center space-x-5 rounded-full border-2 border-[#FEA918] bg-white pr-8 "
          >
            {/* Icon */}
            <div className=" w-24 h-24 rounded-full flex items-center justify-center">
              <img src={instagram} alt="Instagram" className="w-full h-full" />
            </div>

            {/* Text */}
            <div>
              <p className="text-3xl font-extrabold">638K+</p>
              <p className="text-xl text-gray-700">Followers</p>
            </div>
          </motion.a>

          {/* LINKEDIN */}
          <motion.a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="relative flex items-center space-x-5 rounded-full border-2 border-[#0072B1] bg-white pr-8 "
          >
            {/* Icon */}
            <div className=" w-24 h-24 rounded-full flex items-center justify-center">
              <img src={linkedin} alt="LinkedIn" className="w-full h-full" />
            </div>

            {/* Text */}
            <div>
              <p className="text-3xl font-extrabold">173K+</p>
              <p className="text-xl text-gray-700">Followers</p>
            </div>
          </motion.a>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white border rounded-3xl overflow-hidden"
        >
          {/* LinkedIn Header */}
          <div className="p-6 border-b flex gap-4 items-start">
            <img src={dp} alt="dp" className="w-12 h-12 rounded-full" />
            <div>
              <h3 className="font-semibold">Epaphra T</h3>
              <p className="text-sm text-gray-500">
                Founder TownScholar | Storyteller | Podcast Host
              </p>

              <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                I'm not going to tell you I'm special. I'm not.
                {readMore && (
                  <>
                    {" "}
                    I just decided early that I would work on things that
                    mattered deeply to me, and I stayed consistent even when
                    results were invisible.
                  </>
                )}
                <button
                  onClick={() => setReadMore(!readMore)}
                  className="text-blue-600 font-medium ml-1"
                >
                  {readMore ? "less" : "...more"}
                </button>
              </p>
            </div>
          </div>

          {/* Image */}
          <motion.img
            initial={{ scale: 1.05, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            src={profile}
            alt="Founder"
            className="w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
