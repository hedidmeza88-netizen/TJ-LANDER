import React, { useState } from 'react';
import {
    Database,
    Zap,
    Search,
    Code,
    CheckCircle,
    ArrowRight,
    Terminal,
    Shield,
    FileText,
    Menu,
    X,
    Globe,
    Layers,
    Cpu,
    ArrowLeft,
    Calendar,
    Tag
} from 'lucide-react';
import { blogPosts } from './data/blogPosts';

const GenesisSpark = () => (
    <svg
        viewBox="0 0 100 100"
        className="w-8 h-8 md:w-10 md:h-10 animate-pulse"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M50 0L65 35L100 50L65 65L50 100L35 65L0 50L35 35L50 0Z"
            className="fill-cyan-500 opacity-80 blur-sm"
        />
        <path
            d="M50 15L58 42L85 50L58 58L50 85L42 58L15 50L42 42L50 15Z"
            className="fill-white"
        />
    </svg>
);

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [view, setView] = useState('home'); // 'home', 'blog', 'post'
    const [activePost, setActivePost] = useState(null);

    const navigateToBlog = () => {
        setView('blog');
        setIsMenuOpen(false);
        window.scrollTo(0, 0);
    };

    const navigateToPost = (post) => {
        setActivePost(post);
        setView('post');
        window.scrollTo(0, 0);
    };

    const navigateToHome = () => {
        setView('home');
        setIsMenuOpen(false);
        window.scrollTo(0, 0);
    };

    // Render Logic
    const renderContent = () => {
        switch (view) {
            case 'blog':
                return (
                    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Latest Intelligence</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                                Deep dives into RAG architectures, compliance, and enterprise AI patterns.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {blogPosts.map((post) => (
                                <div
                                    key={post.id}
                                    onClick={() => navigateToPost(post)}
                                    className="group rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden hover:bg-slate-900 transition cursor-pointer flex flex-col"
                                >
                                    <div className="h-48 bg-gradient-to-br from-slate-800 to-black relative">
                                        <div className="absolute top-4 left-4">
                                            <span className="text-xs font-bold text-cyan-400 px-2 py-1 rounded bg-black/50 border border-cyan-500/30 uppercase tracking-wider">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                                            <Calendar size={12} /> {post.date}
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                                            {post.description}
                                        </p>
                                        <div className="mt-auto flex items-center gap-2 text-sm font-bold text-cyan-500 group-hover:gap-3 transition-all">
                                            Read Article <ArrowRight size={16} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'post':
                return activePost ? (
                    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
                        <button
                            onClick={navigateToBlog}
                            className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 mb-8 transition-colors group"
                        >
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Blog
                        </button>

                        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 md:p-12">
                            <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                                <span className="flex items-center gap-1.5 px-3 py-1 bg-cyan-950/30 text-cyan-400 rounded-full border border-cyan-500/20">
                                    <Tag size={12} /> {activePost.category}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Calendar size={14} /> {activePost.date}
                                </span>
                            </div>

                            <h1 className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight">
                                {activePost.title}
                            </h1>

                            <div className="prose prose-invert prose-cyan max-w-none text-slate-300 leading-relaxed whitespace-pre-line">
                                {activePost.content}
                            </div>
                        </div>
                    </div>
                ) : null;
            case 'home':
            default:
                return (
                    <>
                        {/* Hero Section */}
                        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-cyan-900/20 blur-[100px]" />

                            <div className="max-w-5xl mx-auto text-center relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-8">
                                    <Terminal size={14} className="text-cyan-400" />
                                    <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                                        v2.0 Public Beta is Live
                                    </span>
                                </div>

                                <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
                                    Stop building data pipelines.<br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Just start querying.</span>
                                </h1>

                                <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                                    The privacy-first RAG API for developers. Connect Google Drive, Notion, and Slack in seconds. We handle the chunking, embedding, and vector DB—you just get the answers.
                                </p>

                                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-20">
                                    <button className="w-full md:w-auto bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] flex items-center justify-center gap-2">
                                        Get API Key <ArrowRight size={20} />
                                    </button>
                                    <button className="w-full md:w-auto px-8 py-4 rounded-lg font-bold border border-slate-700 hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                                        View Documentation
                                    </button>
                                </div>

                                {/* Code Snippet - The "Magic" */}
                                <div className="max-w-3xl mx-auto rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl text-left">
                                    <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900/50">
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                                        </div>
                                        <span className="text-xs font-mono text-slate-500 ml-2">init_rag.py</span>
                                    </div>
                                    <div className="p-6 overflow-x-auto">
                                        <pre className="font-mono text-sm md:text-base text-slate-300">
                                            <code>
                                                <span className="text-purple-400">import</span> axion_rag<br /><br />
                                                <span className="text-slate-500"># 1. Initialize</span><br />
                                                client = axion_rag.Client(api_key=<span className="text-green-400">"sk_..."</span>)<br /><br />
                                                <span className="text-slate-500"># 2. Add Source (or use Dashboard)</span><br />
                                                client.add_source(<span className="text-green-400">"https://docs.google.com/..."</span>, type=<span className="text-green-400">"gdrive"</span>)<br /><br />
                                                <span className="text-slate-500"># 3. Query</span><br />
                                                response = client.query(<span className="text-green-400">"What is our Q3 roadmap?"</span>)<br />
                                                print(response.answer)<br />
                                                <span className="text-slate-500"># Output: "The Q3 roadmap focuses on... [Source: Roadmap.pdf]"</span>
                                            </code>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Trusted By */}
                        <section className="py-10 border-y border-slate-800 bg-black/20">
                            <div className="max-w-7xl mx-auto px-6 text-center">
                                <p className="text-xs font-bold text-slate-500 mb-8 uppercase tracking-widest">Integrating with the best</p>
                                <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                                    <div className="flex items-center gap-2 font-bold text-xl text-white"><Globe size={20} /> Google Drive</div>
                                    <div className="flex items-center gap-2 font-bold text-xl text-white"><FileText size={20} /> Notion</div>
                                    <div className="flex items-center gap-2 font-bold text-xl text-white"><Layers size={20} /> Slack</div>
                                    <div className="flex items-center gap-2 font-bold text-xl text-white"><Database size={20} /> Confluence</div>
                                    <div className="flex items-center gap-2 font-bold text-xl text-white"><Cpu size={20} /> LangChain</div>
                                </div>
                            </div>
                        </section>

                        {/* Features (The Moat) */}
                        <section id="features" className="py-24 px-6 md:px-12">
                            <div className="max-w-7xl mx-auto">
                                <div className="text-center mb-16">
                                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">The RAG Platform for Engineers</h2>
                                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                                        We solved the hard parts—ingestion, parsing, and hybrid search—so you can focus on building the app.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {/* Feature 1 */}
                                    <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900 transition group">
                                        <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-6 border border-cyan-500/20 group-hover:border-cyan-500/50 transition">
                                            <Zap className="text-cyan-500" size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-white">Universal Connectors</h3>
                                        <p className="text-slate-400 leading-relaxed">
                                            Don't write scrapers. One-click sync for Google Drive, Notion, Slack, Confluence, and SharePoint. We keep the index fresh automatically.
                                        </p>
                                    </div>

                                    {/* Feature 2 */}
                                    <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900 transition group">
                                        <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-6 border border-cyan-500/20 group-hover:border-cyan-500/50 transition">
                                            <Code className="text-cyan-500" size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-white">Smart Parsing Engine</h3>
                                        <p className="text-slate-400 leading-relaxed">
                                            We don't just dump text. We maintain document structure, convert tables to structured data, and OCR scanned PDFs automatically.
                                        </p>
                                    </div>

                                    {/* Feature 3 */}
                                    <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900 transition group">
                                        <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-6 border border-cyan-500/20 group-hover:border-cyan-500/50 transition">
                                            <Search className="text-cyan-500" size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-white">Hybrid Search</h3>
                                        <p className="text-slate-400 leading-relaxed">
                                            Vector search isn't enough. We combine Dense Vector Retrieval with BM25 Keyword Search and Reranking to deliver state-of-the-art accuracy.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* How It Works */}
                        <section id="how-it-works" className="py-24 px-6 bg-slate-900/30 border-y border-slate-800">
                            <div className="max-w-7xl mx-auto">
                                <div className="text-center mb-16">
                                    <h2 className="text-3xl font-bold mb-4 text-white">How it Works</h2>
                                    <p className="text-slate-400">From raw data to intelligent insights in 3 steps.</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                                    {/* Connecting Line (Desktop) */}
                                    <div className="hidden md:block absolute top-[20%] left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-cyan-900 via-cyan-500 to-cyan-900 opacity-30" />

                                    {/* Step 1 */}
                                    <div className="relative flex flex-col items-center text-center">
                                        <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-6 relative z-10 shadow-xl">
                                            <Database className="text-cyan-400" size={32} />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-white">1. Sync Data</h3>
                                        <p className="text-slate-400 text-sm max-w-xs">
                                            Connect your data sources via our dashboard or API. We handle authentication and change tracking.
                                        </p>
                                    </div>

                                    {/* Step 2 */}
                                    <div className="relative flex flex-col items-center text-center">
                                        <div className="w-16 h-16 rounded-2xl bg-cyan-950 border border-cyan-500/50 flex items-center justify-center mb-6 relative z-10 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                                            <Cpu className="text-cyan-400" size={32} />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-white">2. We Process</h3>
                                        <p className="text-slate-400 text-sm max-w-xs">
                                            We chunk, embed, and index your data using our hybrid engine. Optimized for RAG recall.
                                        </p>
                                    </div>

                                    {/* Step 3 */}
                                    <div className="relative flex flex-col items-center text-center">
                                        <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-6 relative z-10 shadow-xl">
                                            <Terminal className="text-cyan-400" size={32} />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-white">3. You Query</h3>
                                        <p className="text-slate-400 text-sm max-w-xs">
                                            Call the `query()` endpoint. Receive grounded, context-aware answers with citations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Comparison Table */}
                        <section className="py-24 px-6">
                            <div className="max-w-5xl mx-auto">
                                <div className="text-center mb-16">
                                    <h2 className="text-3xl font-bold mb-4 text-white">Don't reinvent the wheel</h2>
                                    <p className="text-slate-400">Why build this yourself?</p>
                                </div>

                                <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="border-b border-slate-800 bg-slate-900">
                                                <th className="p-6 font-bold text-slate-400 uppercase text-xs tracking-wider">Feature</th>
                                                <th className="p-6 font-bold text-slate-400 uppercase text-xs tracking-wider">Self-Hosted RAG</th>
                                                <th className="p-6 font-bold text-cyan-400 uppercase text-xs tracking-wider bg-cyan-950/20">Axion RAGaaS</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-800">
                                            <tr>
                                                <td className="p-6 font-medium text-slate-300">Setup Time</td>
                                                <td className="p-6 text-slate-500">2-4 Weeks</td>
                                                <td className="p-6 font-bold text-white bg-cyan-950/10">5 Minutes</td>
                                            </tr>
                                            <tr>
                                                <td className="p-6 font-medium text-slate-300">Parsing PDFs</td>
                                                <td className="p-6 text-slate-500">"Good luck"</td>
                                                <td className="p-6 font-bold text-white bg-cyan-950/10">Intelligent OCR & Tables</td>
                                            </tr>
                                            <tr>
                                                <td className="p-6 font-medium text-slate-300">Connectors</td>
                                                <td className="p-6 text-slate-500">Build & Maintain Scrapers</td>
                                                <td className="p-6 font-bold text-white bg-cyan-950/10">One-Click Integrations</td>
                                            </tr>
                                            <tr>
                                                <td className="p-6 font-medium text-slate-300">Vector DB Cost</td>
                                                <td className="p-6 text-slate-500">$500/mo + Ops Pain</td>
                                                <td className="p-6 font-bold text-white bg-cyan-950/10">Included</td>
                                            </tr>
                                            <tr>
                                                <td className="p-6 font-medium text-slate-300">Security</td>
                                                <td className="p-6 text-slate-500">Self-Managed</td>
                                                <td className="p-6 font-bold text-white bg-cyan-950/10">SOC 2 Ready</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>

                        {/* Latest Intelligence */}
                        <section className="py-24 px-6 border-t border-slate-800 bg-slate-900/10">
                            <div className="max-w-7xl mx-auto">
                                <div className="text-center mb-16">
                                    <h2 className="text-3xl font-bold mb-4 text-white">Latest Intelligence</h2>
                                    <p className="text-slate-400">Engineering strategies for the AI-first enterprise.</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {blogPosts.slice(0, 3).map((post) => (
                                        <div
                                            key={post.id}
                                            onClick={() => navigateToPost(post)}
                                            className="group rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden hover:bg-slate-900 transition cursor-pointer flex flex-col"
                                        >
                                            <div className="h-48 bg-gradient-to-br from-slate-800 to-black relative">
                                                <div className="absolute top-4 left-4">
                                                    <span className="text-xs font-bold text-cyan-400 px-2 py-1 rounded bg-black/50 border border-cyan-500/30 uppercase tracking-wider">
                                                        {post.category}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="p-6 flex-1 flex flex-col">
                                                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                                                    <Calendar size={12} /> {post.date}
                                                </div>
                                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition line-clamp-2">
                                                    {post.title}
                                                </h3>
                                                <div className="mt-auto flex items-center gap-2 text-sm font-bold text-cyan-500 group-hover:gap-3 transition-all">
                                                    Read Article <ArrowRight size={16} />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="text-center mt-12">
                                    <button onClick={navigateToBlog} className="px-8 py-3 rounded-lg border border-slate-700 font-bold hover:bg-white/5 transition text-white">
                                        View All Articles
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Pricing */}
                        <section id="pricing" className="py-24 px-6 bg-slate-900/20 border-t border-slate-800">
                            <div className="max-w-7xl mx-auto">
                                <div className="text-center mb-16">
                                    <h2 className="text-3xl font-bold mb-4 text-white">Transparent Pricing</h2>
                                    <p className="text-slate-400">Start for free. Scale when you're ready.</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                                    {/* Tier 1: Hacker */}
                                    <div className="p-8 rounded-2xl border border-slate-800 bg-slate-950 hover:bg-slate-900 transition">
                                        <h3 className="text-xl font-bold mb-4 text-white">Hacker</h3>
                                        <div className="text-4xl font-bold mb-4 text-white">$0 <span className="text-base font-normal text-slate-500">/ mo</span></div>
                                        <p className="text-slate-400 mb-8 h-12">For prototyping and hackathons.</p>
                                        <ul className="space-y-4 mb-8 text-sm text-slate-300">
                                            <li className="flex items-center gap-2"><CheckCircle size={16} className="text-cyan-500" /> Up to 50 Documents</li>
                                            <li className="flex items-center gap-2"><CheckCircle size={16} className="text-cyan-500" /> 1,000 Queries / mo</li>
                                            <li className="flex items-center gap-2"><CheckCircle size={16} className="text-cyan-500" /> 1 Integration (e.g. Notion)</li>
                                            <li className="flex items-center gap-2"><CheckCircle size={16} className="text-cyan-500" /> Community Support</li>
                                        </ul>
                                        <button className="w-full py-3 rounded-lg border border-slate-700 font-bold hover:bg-white/5 transition text-white">Start Building</button>
                                    </div>

                                    {/* Tier 2: Pro */}
                                    <div className="p-8 rounded-2xl border border-cyan-500/50 bg-slate-900 relative scale-105 shadow-2xl">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                            Most Popular
                                        </div>
                                        <h3 className="text-xl font-bold mb-4 text-cyan-400">Pro</h3>
                                        <div className="text-4xl font-bold mb-4 text-white">$49 <span className="text-base font-normal text-slate-500">/ mo</span></div>
                                        <p className="text-slate-400 mb-8 h-12">For startups and MVPs.</p>
                                        <ul className="space-y-4 mb-8 text-sm text-slate-300">
                                            <li className="flex items-center gap-2"><CheckCircle size={16} className="text-cyan-500" /> Up to 10,000 Documents</li>
                                            <li className="flex items-center gap-2"><CheckCircle size={16} className="text-cyan-500" /> 50,000 Queries / mo</li>
                                            <li className="flex items-center gap-2"><CheckCircle size={16} className="text-cyan-500" /> Unlimited Integrations</li>
                                            <li className="flex items-center gap-2"><CheckCircle size={16} className="text-cyan-500" /> Hybrid Search Enabled</li>
                                            <li className="flex items-center gap-2"><CheckCircle size={16} className="text-cyan-500" /> Priority Support</li>
                                        </ul>
                                        <button className="w-full bg-cyan-500 text-black py-3 rounded-lg font-bold hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/20">Get Started</button>
                                    </div>

                                    {/* Tier 3: Scale */}
                                    <div className="p-8 rounded-2xl border border-slate-800 bg-slate-950 hover:bg-slate-900 transition">
                                        <h3 className="text-xl font-bold mb-4 text-white">Scale</h3>
                                        <div className="text-4xl font-bold mb-4 text-white">Custom</div>
                                        <p className="text-slate-400 mb-8 h-12">For production workloads.</p>
                                        <ul className="space-y-4 mb-8 text-sm text-slate-300">
                                            <li className="flex items-center gap-2"><CheckCircle size={16} className="text-cyan-500" /> Unlimited Documents</li>
                                            <li className="flex items-center gap-2"><CheckCircle size={16} className="text-cyan-500" /> Usage-based Pricing</li>
                                            <li className="flex items-center gap-2"><CheckCircle size={16} className="text-cyan-500" /> Zero-Retention Mode</li>
                                            <li className="flex items-center gap-2"><CheckCircle size={16} className="text-cyan-500" /> Dedicated Tenant</li>
                                            <li className="flex items-center gap-2"><CheckCircle size={16} className="text-cyan-500" /> SOC 2 Report</li>
                                        </ul>
                                        <button className="w-full py-3 rounded-lg border border-slate-700 font-bold hover:bg-white/5 transition text-white">Contact Sales</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                );
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-cyan-500/30">

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-slate-800 bg-slate-950/80">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3 cursor-pointer" onClick={navigateToHome}>
                        <GenesisSpark />
                        <span className="text-xl font-bold tracking-wider text-white">AXION</span>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        {/* Only show scrolling links if in 'home' view, otherwise navigate home */}
                        {view === 'home' ? (
                            <>
                                <a href="#features" className="hover:text-cyan-400 transition-colors text-sm font-medium">Features</a>
                                <a href="#how-it-works" className="hover:text-cyan-400 transition-colors text-sm font-medium">How it Works</a>
                                <a href="#pricing" className="hover:text-cyan-400 transition-colors text-sm font-medium">Pricing</a>
                            </>
                        ) : (
                            <button onClick={navigateToHome} className="hover:text-cyan-400 transition-colors text-sm font-medium">Product</button>
                        )}
                        <button onClick={navigateToBlog} className={`hover:text-cyan-400 transition-colors text-sm font-medium ${view === 'blog' ? 'text-cyan-400' : ''}`}>Blog</button>
                        <a href="#docs" className="hover:text-cyan-400 transition-colors text-sm font-medium">Docs</a>

                        <div className="w-px h-6 bg-slate-800"></div>

                        <a href="/login" className="text-sm font-bold text-white hover:text-cyan-400 transition-colors">Log In</a>
                        <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-5 py-2 rounded-lg font-bold text-sm transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                            Start for Free
                        </button>
                    </div>

                    <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden absolute w-full bg-slate-950 border-b border-slate-800 p-6 flex flex-col gap-6">
                        <button className="text-lg font-medium text-left" onClick={navigateToHome}>Product</button>
                        <button className="text-lg font-medium text-left" onClick={navigateToBlog}>Blog</button>
                        <button className="bg-cyan-500 text-black py-3 rounded-lg font-bold">
                            Start for Free
                        </button>
                    </div>
                )}
            </nav>

            {renderContent()}

            {/* Footer */}
            <footer className="py-12 border-t border-slate-800 bg-slate-950">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <GenesisSpark />
                        <span className="font-bold tracking-widest text-sm text-white">AXION</span>
                    </div>
                    <div className="text-sm text-slate-500">
                        &copy; 2024 Axion Minds. Built for developers <Globe className="inline w-3 h-3 ml-1" />
                    </div>
                    <div className="flex gap-6 text-sm font-medium text-slate-400">
                        <button onClick={navigateToBlog} className="hover:text-cyan-400 transition">Blog</button>
                        <a href="#" className="hover:text-cyan-400 transition">Terms</a>
                        <a href="#" className="hover:text-cyan-400 transition">Privacy</a>
                        <a href="#" className="hover:text-cyan-400 transition">Status</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
