import React, { useState } from "react";
import { AiFillHome, AiOutlineCompass } from "react-icons/ai";
import {
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineWatchLater,
  MdOutlineThumbUp,
  MdThumbUp,
  MdThumbDown,
} from "react-icons/md";
import { FaMusic, FaYoutube, FaShare } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

import netflix from '../src/assets/img/netflix.png'
import tesla from '../src/assets/img/tesla.png'
import discord from '../src/assets/img/discord.png'

import yutubavatar from '../src/assets/svg/yutubavatar.svg'
import inistavatar from '../src/assets/svg/inistavatar.svg'
import tiktokavatar from '../src/assets/svg/tiktokavatar.svg'
import netfliksavatar from '../src/assets/svg/netfliksavatar.svg'
import tiviteravatar from '../src/assets/svg/tiviteravatar.svg'
import spotifiyavatar from '../src/assets/svg/spotifiyavatar.svg'
import disdoravatar from '../src/assets/svg/disdoravatar.svg'


const App = () => {
  const menuItems = [
    { name: "Home", icon: <AiFillHome size={20} /> },
    { name: "Explore", icon: <AiOutlineCompass size={20} /> },
    { name: "Subscriptions", icon: <MdSubscriptions size={20} /> },
    { name: "Originals", icon: <FaYoutube size={20} /> },
    { name: "YouTube Music", icon: <FaMusic size={20} /> },
    { name: "Library", icon: <MdOutlineVideoLibrary size={20} /> },
    { name: "History", icon: <MdHistory size={20} /> },
    { name: "Your Videos", icon: <MdOutlineVideoLibrary size={20} /> },
    { name: "Watch Later", icon: <MdOutlineWatchLater size={20} /> },
    { name: "Liked Videos", icon: <MdOutlineThumbUp size={20} /> },
  ];

  const sites = [
    {
      id: 1,
      name: "YouTube",
      logo:yutubavatar,
      creator: "Steve Chen, Chad Hurley, Jawed Karim",
      year: "2005",
      author: "James Gouse",
      views: "15K",
      time: "1 week ago",
      img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop",
      duration: "23:45",
      title: "YouTube Official Promo - Complete Guide",
      description: "Dive deep into the world of YouTube. Learn how this platform revolutionized video sharing and content creation. Discover tips, tricks, and strategies used by top creators.",
      likes: "1.7K",
      dislikes: "632",
      subscribers: "1.2M"
    },
    {
      id: 2,
      name: "Instagram",
      logo:inistavatar,
      creator: "Kevin Systrom, Mike Krieger",
      year: "2010",
      author: "Alan Cooper",
      views: "12K",
      time: "3 days ago",
      img: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&h=250&fit=crop",
      duration: "15:30",
      title: "Instagram Marketing Masterclass",
      description: "Master Instagram marketing with proven strategies. Learn to grow your following, create engaging content, and build your brand on Instagram.",
      likes: "2.1K",
      dislikes: "45",
      subscribers: "890K"
    },
    {
      id: 3,
      name: "TikTok",
      logo:tiktokavatar,
      creator: "Zhang Yiming",
      year: "2016",
      author: "Anna White",
      views: "20K",
      time: "4 days ago",
      img: "https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?w=400&h=250&fit=crop",
      duration: "18:20",
      title: "TikTok Success Strategy 2024",
      description: "Go viral on TikTok with these proven strategies. Learn the algorithm, trending sounds, and content creation techniques that work.",
      likes: "3.2K",
      dislikes: "89",
      subscribers: "1.5M"
    },
    {
      id: 4,
      name: "Netflix",
      logo:netfliksavatar,
      creator: "Reed Hastings, Marc Randolph",
      year: "1997",
      author: "Olivia Stone",
      views: "17K",
      time: "5 days ago",
      img: netflix,
      duration: "25:15",
      title: "Netflix Documentary Series Review",
      description: "Comprehensive review of Netflix's best documentaries. Discover hidden gems and must-watch series that will expand your horizons.",
      likes: "1.9K",
      dislikes: "112",
      subscribers: "750K"
    },
    {
      id: 5,
      name: "Twitter",
      logo: tiviteravatar,
      creator: "Jack Dorsey, Noah Glass",
      year: "2006",
      author: "Marcus Levin",
      views: "9K",
      time: "2 weeks ago",
      img: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=400&h=250&fit=crop",
      duration: "12:40",
      title: "Twitter Marketing Tips & Tricks",
      description: "Unlock the power of Twitter for business. Learn to craft viral tweets, build engaged communities, and leverage trending topics.",
      likes: "980",
      dislikes: "67",
      subscribers: "520K"
    },
    {
      id: 6,
      name: "Spotify",
      logo:spotifiyavatar,
      creator: "Daniel Ek, Martin Lorentzon",
      year: "2006",
      author: "Maria Lopez",
      views: "42K",
      time: "3 days ago",
      img: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=250&fit=crop",
      duration: "20:30",
      title: "Spotify Playlist Curation Guide",
      description: "Create the perfect playlist on Spotify. Learn curation techniques, discover new music, and understand the Spotify algorithm.",
      likes: "4.2K",
      dislikes: "156",
      subscribers: "2.1M"
    },
    {
      id: 7,
      name: "Discord",
      logo:discord,
      creator: "Jason Citron, Stan Vishnevskiy",
      year: "2015",
      author: "Alex Carter",
      views: "28K",
      time: "2 weeks ago",
      img:discord,
      duration: "16:50",
      title: "Building Discord Communities",
      description: "Master Discord server management. Learn to create engaging communities, set up bots, and moderate effectively.",
      likes: "2.8K",
      dislikes: "98",
      subscribers: "1.3M"
    },
    {
      id: 8,
      name: "Tesla",
      logo:yutubavatar,
      creator: "Elon Musk, JB Straubel",
      year: "2003",
      author: "David Green",
      views: "35K",
      time: "1 week ago",
      img:tesla,
      duration: "22:10",
      title: "Tesla Model S Review 2024",
      description: "In-depth Tesla Model S review. Explore features, performance, autopilot capabilities, and real-world ownership experience.",
      likes: "3.5K",
      dislikes: "234",
      subscribers: "1.8M"
    },
    {
      id: 1,
      name: "YouTube",
      logo:yutubavatar,
      creator: "Steve Chen, Chad Hurley, Jawed Karim",
      year: "2005",
      author: "James Gouse",
      views: "15K",
      time: "1 week ago",
      img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop",
      duration: "23:45",
      title: "YouTube Official Promo - Complete Guide",
      description: "Dive deep into the world of YouTube. Learn how this platform revolutionized video sharing and content creation. Discover tips, tricks, and strategies used by top creators.",
      likes: "1.7K",
      dislikes: "632",
      subscribers: "1.2M"
    },
    {
      id: 2,
      name: "Instagram",
      logo:inistavatar,
      creator: "Kevin Systrom, Mike Krieger",
      year: "2010",
      author: "Alan Cooper",
      views: "12K",
      time: "3 days ago",
      img: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&h=250&fit=crop",
      duration: "15:30",
      title: "Instagram Marketing Masterclass",
      description: "Master Instagram marketing with proven strategies. Learn to grow your following, create engaging content, and build your brand on Instagram.",
      likes: "2.1K",
      dislikes: "45",
      subscribers: "890K"
    },
    {
      id: 3,
      name: "TikTok",
      logo:tiktokavatar,
      creator: "Zhang Yiming",
      year: "2016",
      author: "Anna White",
      views: "20K",
      time: "4 days ago",
      img: "https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?w=400&h=250&fit=crop",
      duration: "18:20",
      title: "TikTok Success Strategy 2024",
      description: "Go viral on TikTok with these proven strategies. Learn the algorithm, trending sounds, and content creation techniques that work.",
      likes: "3.2K",
      dislikes: "89",
      subscribers: "1.5M"
    },
    {
      id: 4,
      name: "Netflix",
      logo:netfliksavatar,
      creator: "Reed Hastings, Marc Randolph",
      year: "1997",
      author: "Olivia Stone",
      views: "17K",
      time: "5 days ago",
      img: netflix,
      duration: "25:15",
      title: "Netflix Documentary Series Review",
      description: "Comprehensive review of Netflix's best documentaries. Discover hidden gems and must-watch series that will expand your horizons.",
      likes: "1.9K",
      dislikes: "112",
      subscribers: "750K"
    },
    {
      id: 5,
      name: "Twitter",
      logo: tiviteravatar,
      creator: "Jack Dorsey, Noah Glass",
      year: "2006",
      author: "Marcus Levin",
      views: "9K",
      time: "2 weeks ago",
      img: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=400&h=250&fit=crop",
      duration: "12:40",
      title: "Twitter Marketing Tips & Tricks",
      description: "Unlock the power of Twitter for business. Learn to craft viral tweets, build engaged communities, and leverage trending topics.",
      likes: "980",
      dislikes: "67",
      subscribers: "520K"
    },
    {
      id: 6,
      name: "Spotify",
      logo:spotifiyavatar,
      creator: "Daniel Ek, Martin Lorentzon",
      year: "2006",
      author: "Maria Lopez",
      views: "42K",
      time: "3 days ago",
      img: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=250&fit=crop",
      duration: "20:30",
      title: "Spotify Playlist Curation Guide",
      description: "Create the perfect playlist on Spotify. Learn curation techniques, discover new music, and understand the Spotify algorithm.",
      likes: "4.2K",
      dislikes: "156",
      subscribers: "2.1M"
    },
    {
      id: 7,
      name: "Discord",
      logo:discord,
      creator: "Jason Citron, Stan Vishnevskiy",
      year: "2015",
      author: "Alex Carter",
      views: "28K",
      time: "2 weeks ago",
      img:discord,
      duration: "16:50",
      title: "Building Discord Communities",
      description: "Master Discord server management. Learn to create engaging communities, set up bots, and moderate effectively.",
      likes: "2.8K",
      dislikes: "98",
      subscribers: "1.3M"
    },
    {
      id: 8,
      name: "Tesla",
      logo:yutubavatar,
      creator: "Elon Musk, JB Straubel",
      year: "2003",
      author: "David Green",
      views: "35K",
      time: "1 week ago",
      img:tesla,
      duration: "22:10",
      title: "Tesla Model S Review 2024",
      description: "In-depth Tesla Model S review. Explore features, performance, autopilot capabilities, and real-world ownership experience.",
      likes: "3.5K",
      dislikes: "234",
      subscribers: "1.8M"
    },
  ];

  const comments = [
    { id: 1, author: "James Gouse", avatar: "https://i.pravatar.cc/40?u=1", text: "Wow, world is full of different skills", time: "8 hours ago", likes: 3 },
    { id: 2, author: "Alan Cooper", avatar: "https://i.pravatar.cc/40?u=2", text: "Can you provide?", time: "4 days ago", likes: 0 },
    { id: 3, author: "Marcus Levin", avatar: "https://i.pravatar.cc/40?u=3", text: "This is incredibly insightful!", time: "5 days ago", likes: 12 },
    { id: 4, author: "Anna White", avatar: "https://i.pravatar.cc/40?u=4", text: "Great content as always 🔥", time: "1 week ago", likes: 7 },
  ];

  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState("home"); // 'home' or 'video'
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const filtered = filter === "All" ? sites : sites.filter((s) => s.name === filter);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setCurrentPage("video");
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setCurrentPage("home");
    setSelectedVideo(null);
  };

  return (
    <div className="flex min-h-screen bg-[#0f0f0f] text-white">
      {/* Sidebar */}
      <aside className={`fixed md:static inset-y-0 left-0 z-40 w-60 bg-[#0f0f0f] border-r border-neutral-800 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="flex items-center gap-4 p-4 sticky top-0 bg-[#0f0f0f] z-10">
            <button onClick={() => setSidebarOpen(false)} className="md:hidden">
              <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
              </svg>
            </button>
            <svg className="w-6 h-6" viewBox="0 0 90 20" fill="white">
              <path d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z" fill="#FF0000"/>
              <path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white"/>
            </svg>
            <span className="text-xl font-semibold">YouTube</span>
          </div>

          <div className="px-3 space-y-1">
            {menuItems.map((item, idx) => (
              <React.Fragment key={item.name}>
                <button 
                  onClick={() => idx === 0 && handleBackToHome()}
                  className={`flex items-center gap-6 w-full px-3 py-2.5 rounded-lg hover:bg-neutral-800 transition ${idx === 0 && currentPage === 'home' ? 'bg-neutral-800' : ''}`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm font-medium">{item.name}</span>
                </button>
                {idx === 0 && <div className="h-px bg-neutral-800 my-2" />}
                {idx === 4 && <div className="h-px bg-neutral-800 my-2" />}
              </React.Fragment>
            ))}
          </div>

          <div className="px-3 mt-4">
            <div className="px-3 py-2 text-sm font-semibold text-neutral-400 uppercase tracking-wider">
              Subscriptions
            </div>
            <div className="space-y-1">
              {["James Gouse", "Alan Cooper", "Marcus Levin", "Alexis Sears", "Anna White"].map((name) => (
                <button key={name} className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-neutral-800 transition">
                  <img src={`https://i.pravatar.cc/32?u=${name}`} alt={name} className="w-6 h-6 rounded-full" />
                  <span className="text-sm truncate">{name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-20 bg-[#0f0f0f] border-b border-neutral-800">
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex items-center gap-4">
              <button onClick={() => setSidebarOpen(true)} className="md:hidden p-2">
                <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                </svg>
              </button>
              <button className="hidden md:block p-2">
                <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                </svg>
              </button>
              <div className="hidden md:flex items-center gap-2 cursor-pointer" onClick={handleBackToHome}>
                <svg className="w-8 h-8" viewBox="0 0 90 20" fill="white">
                  <path d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z" fill="#FF0000"/>
                  <path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white"/>
                </svg>
                <span className="text-xl font-semibold">YouTube</span>
              </div>
            </div>

            <div className="flex-1 max-w-2xl mx-4">
              <div className="flex items-center">
                <div className="flex-1 flex items-center bg-[#121212] border border-neutral-700 rounded-l-full overflow-hidden focus-within:border-blue-500">
                  <input type="text" placeholder="Search" className="flex-1 bg-transparent px-4 py-2 text-sm outline-none" />
                </div>
                <button className="bg-[#222222] border border-l-0 border-neutral-700 px-6 py-2 rounded-r-full hover:bg-neutral-700">
                  <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  </svg>
                </button>
                <button className="ml-2 p-2 bg-[#222222] rounded-full hover:bg-neutral-700">
                  <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-neutral-800 rounded-full">
                <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                  <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
                </svg>
              </button>
              <button className="p-2 hover:bg-neutral-800 rounded-full">
                <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                  <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
                </svg>
              </button>
              <img src="https://i.pravatar.cc/32" alt="Profile" className="w-8 h-8 rounded-full cursor-pointer" />
            </div>
          </div>
        </header>

        {/* Conditional Rendering: Home or Video Page */}
        {currentPage === "home" ? (
          <>
            <div className="sticky top-[57px] z-10 bg-[#0f0f0f] border-b border-neutral-800 px-4 py-3">
              <div className="flex gap-3 overflow-x-auto scrollbar-hide">
                {["All", "YouTube", "Instagram", "Twitter", "TikTok", "Netflix", "Spotify", "Discord", "Tesla"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setFilter(item)}
                    className={`px-3 py-1.5 rounded-lg whitespace-nowrap text-sm font-medium transition ${
                      filter === item ? "bg-white text-black" : "bg-neutral-800 hover:bg-neutral-700"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <main className="flex-1 p-4 overflow-y-auto">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filtered.map((site) => (
                  <div key={site.id} onClick={() => handleVideoClick(site)} className="cursor-pointer group">
                    <div className="relative rounded-xl overflow-hidden bg-neutral-800 mb-3">
                      <img src={site.img} alt={site.name} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-200" />
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-semibold px-1.5 py-0.5 rounded">
                        {site.duration}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <img src={site.logo} alt={site.name} className="w-9 h-9 rounded-full flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm line-clamp-2 mb-1">{site.title}</h3>
                        <p className="text-xs text-neutral-400">{site.author}</p>
                        <p className="text-xs text-neutral-400">{site.views} views • {site.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </main>
          </>
        ) : (
          /* Video Player Page */
          <div className="flex-1 overflow-y-auto">
            <div className="max-w-[1750px] mx-auto p-4 lg:p-6">
              <div className="grid lg:grid-cols-[1fr_400px] gap-6">
                {/* Left Column - Video Player & Details */}
                <div className="space-y-4">
                  {/* Video Player */}
                  <div className="relative bg-black rounded-xl overflow-hidden aspect-video">
                    <img src={selectedVideo?.img} alt={selectedVideo?.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <button className="w-20 h-20 flex items-center justify-center bg-red-600 rounded-full hover:bg-red-700 transition">
                        <svg className="w-10 h-10 ml-1" fill="white" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </button>
                    </div>
                    {/* Video Controls */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <div className="w-full bg-red-600 h-1 rounded-full mb-2">
                        <div className="bg-red-500 h-full w-1/3 rounded-full"></div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-4">
                          <button><svg className="w-6 h-6" fill="white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button>
                          <button><svg className="w-6 h-6" fill="white" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg></button>
                          <button><svg className="w-5 h-5" fill="white" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg></button>
                          <span>4:37 / 14:28</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <button><svg className="w-5 h-5" fill="white" viewBox="0 0 24 24"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/></svg></button>
                          <button><svg className="w-5 h-5" fill="white" viewBox="0 0 24 24"><path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12z"/></svg></button>
                          <button><svg className="w-5 h-5" fill="white" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg></button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Video Title */}
                  <h1 className="text-xl font-semibold">{selectedVideo?.title}</h1>

                  {/* Video Stats & Actions */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="text-sm text-neutral-400">
                      {selectedVideo?.views} views • Oct 8, 2021
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="flex items-center gap-2 px-4 py-2 bg-neutral-800 rounded-full hover:bg-neutral-700">
                        <MdThumbUp size={20} />
                        <span>{selectedVideo?.likes}</span>
                        <div className="w-px h-6 bg-neutral-600 mx-2"></div>
                        <MdThumbDown size={20} />
                        <span>{selectedVideo?.dislikes}</span>
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-neutral-800 rounded-full hover:bg-neutral-700">
                        <FaShare size={16} />
                        <span>SHARE</span>
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-neutral-800 rounded-full hover:bg-neutral-700">
                        <IoMdDownload size={20} />
                        <span>SAVE</span>
                      </button>
                                              <button className="px-3 py-2 bg-neutral-800 rounded-full hover:bg-neutral-700">
                        <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Channel Info */}
                  <div className="flex items-start justify-between gap-4 p-4 bg-neutral-900 rounded-xl">
                    <div className="flex items-center gap-4">
                      <img src={selectedVideo?.logo} alt={selectedVideo?.author} className="w-12 h-12 rounded-full" />
                      <div>
                        <h3 className="font-semibold">{selectedVideo?.author}</h3>
                        <p className="text-sm text-neutral-400">{selectedVideo?.subscribers} subscribers</p>
                      </div>
                    </div>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium transition">
                      SUBSCRIBE
                    </button>
                  </div>

                  {/* Description */}
                  <div className="p-4 bg-neutral-900 rounded-xl">
                    <p className={`text-sm ${!showMore ? 'line-clamp-3' : ''}`}>
                      {selectedVideo?.description}
                    </p>
                    <button 
                      onClick={() => setShowMore(!showMore)}
                      className="text-sm font-semibold mt-2 hover:text-neutral-400"
                    >
                      {showMore ? 'SHOW LESS' : 'SHOW MORE'}
                    </button>
                  </div>

                  {/* Comments Section */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">{comments.length} Comments</h3>
                      <button className="flex items-center gap-2 text-sm">
                        <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                          <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"/>
                        </svg>
                        SORT BY
                      </button>
                    </div>

                    {/* Add Comment */}
                    <div className="flex gap-4">
                      <img src="https://i.pravatar.cc/40" alt="You" className="w-10 h-10 rounded-full" />
                      <input 
                        type="text" 
                        placeholder="Add a public comment..." 
                        className="flex-1 bg-transparent border-b border-neutral-700 pb-2 outline-none focus:border-white transition"
                      />
                    </div>

                    {/* Comments List */}
                    <div className="space-y-6">
                      {comments.map((comment) => (
                        <div key={comment.id} className="flex gap-4">
                          <img src={comment.avatar} alt={comment.author} className="w-10 h-10 rounded-full flex-shrink-0" />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-semibold text-sm">{comment.author}</span>
                              <span className="text-xs text-neutral-400">{comment.time}</span>
                            </div>
                            <p className="text-sm mb-2">{comment.text}</p>
                            <div className="flex items-center gap-4">
                              <button className="flex items-center gap-2 text-sm hover:text-neutral-400">
                                <MdThumbUp size={16} />
                                {comment.likes > 0 && <span>{comment.likes}</span>}
                              </button>
                              <button className="flex items-center gap-2 text-sm hover:text-neutral-400">
                                <MdThumbDown size={16} />
                              </button>
                              <button className="text-sm font-semibold hover:text-neutral-400">REPLY</button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column - Suggested Videos */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between mb-4">
                    <button className="px-3 py-1.5 bg-white text-black rounded-lg text-sm font-medium">
                      All
                    </button>
                    <button className="px-3 py-1.5 bg-neutral-800 rounded-lg text-sm font-medium hover:bg-neutral-700">
                      From {selectedVideo?.author}
                    </button>
                  </div>

                  {sites.filter(s => s.id !== selectedVideo?.id).map((video) => (
                    <div 
                      key={video.id}
                      onClick={() => handleVideoClick(video)}
                      className="flex gap-2 cursor-pointer hover:bg-neutral-900 p-2 rounded-lg transition"
                    >
                      <div className="relative w-40 flex-shrink-0">
                        <img 
                          src={video.img} 
                          alt={video.title} 
                          className="w-full aspect-video object-cover rounded-lg"
                        />
                        <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs font-semibold px-1 py-0.5 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm line-clamp-2 mb-1">{video.title}</h4>
                        <p className="text-xs text-neutral-400">{video.author}</p>
                        <p className="text-xs text-neutral-400">{video.views} views • {video.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;