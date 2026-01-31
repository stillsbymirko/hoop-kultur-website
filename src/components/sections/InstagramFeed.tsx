'use client';

import { motion } from 'framer-motion';
import { Instagram, ExternalLink } from 'lucide-react';
import Image from 'next/image';

// Placeholder posts - in production, you'd fetch these from Instagram API
const instagramPosts = [
  {
    id: 1,
    image: '/instagram/post1.jpg',
    likes: 234,
    caption: 'Game day vibes 🏀',
  },
  {
    id: 2,
    image: '/instagram/post2.jpg',
    likes: 189,
    caption: 'Training session with the squad',
  },
  {
    id: 3,
    image: '/instagram/post3.jpg',
    likes: 312,
    caption: 'Level up your handles 💪',
  },
  {
    id: 4,
    image: '/instagram/post4.jpg',
    likes: 276,
    caption: 'Shooting drills',
  },
  {
    id: 5,
    image: '/instagram/post5.jpg',
    likes: 198,
    caption: 'Defense wins championships',
  },
  {
    id: 6,
    image: '/instagram/post6.jpg',
    likes: 421,
    caption: 'Another W 🔥',
  },
];

export default function InstagramFeed() {
  const instagramUrl = 'https://instagram.com/hoopkultur';

  return (
    <section className="py-24 bg-[#f8f8f8] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#d4c8b8] font-semibold text-sm uppercase tracking-wider">
            @hoopkultur
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 font-serif">
            Folge mir auf Instagram
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Training-Clips, Behind the Scenes und tägliche Basketball-Motivation
          </p>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square bg-gray-200 rounded-xl overflow-hidden group cursor-pointer"
            >
              {/* Placeholder gradient - replace with actual images */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f5f0e8]/20 to-gray-300" />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="text-white" size={32} />
              </div>

              {/* Placeholder Icon */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:opacity-0 transition-opacity">
                <span className="text-4xl">🏀</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Follow Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white px-8 py-4 rounded-full font-semibold"
            >
              <Instagram size={22} />
              @hoopkultur folgen
              <ExternalLink size={18} />
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
