// IMAGES
import FeatureBGImage from "../../../assets/images/whitelabel_detail_feature_bg_img.png";

// COMPONENTS
import WrapperLayout from "../../WrapperLayout";
import FeatureCard from "./FeatureCard";

const Features = () => {
    // MOCK DATA
    const coreFeatureData: TCardData = [
        {
            id: 1,
            title: "User Registration and Authentication",
            description: [
                "Email and password-based signup/login",
                "Social media and wallet-based login (e.g., MetaMask, WalletConnect)",
                "Two-factor authentication (2FA)",
            ],
        },
        {
            id: 2,
            title: "Wallet Integration Support for multiple wallets (e.g., MetaMask, Trust Wallet, Coinbase Wallet)",
            description: ["Wallet balance display", "Wallet connection and disconnection functionality"],
        },
        {
            id: 3,
            title: "NFT Minting Simple and Advanced Minting Options",
            description: ["Support for single (ERC-721) and multiple (ERC-1155) token standards", "Lazy minting (gas-free creation)"],
        },
        {
            id: 4,
            title: "NFT Listings",
            description: ["Fixed-price listings", "Auctions (timed or reserve-price auctions)", "Bundle listings (sell multiple NFTs together)"],
        },
        {
            id: 5,
            title: "Marketplace Features",
            description: [
                "Browse and search for NFTs by category, price, creator, or popularity",
                "Filter and sorting options (e.g., price, recent, trending)",
                "Featured collections and promoted NFTs",
            ],
        },
        {
            id: 6,
            title: "NFT Details Page",
            description: [
                "High-resolution previews",
                "Metadata display (e.g., title, description, attributes)",
                "Ownership history and provenance",
                "Smart contract details (e.g., token address, ID)",
            ],
        },
        {
            id: 7,
            title: "Marketplace Features",
            description: [
                "Browse and search for NFTs by category, price, creator, or popularity",
                "Filter and sorting options (e.g., price, recent, trending)",
                "Featured collections and promoted NFTs",
            ],
        },
        {
            id: 8,
            title: "NFT Details Page",
            description: [
                "High-resolution previews",
                "Metadata display (e.g., title, description, attributes)",
                "Ownership history and provenance",
                "Smart contract details (e.g., token address, ID)",
            ],
        },
        {
            id: 9,
            title: "Marketplace Features",
            description: [
                "Browse and search for NFTs by category, price, creator, or popularity",
                "Filter and sorting options (e.g., price, recent, trending)",
                "Featured collections and promoted NFTs",
            ],
        },
        {
            id: 10,
            title: "NFT Details Page",
            description: [
                "High-resolution previews",
                "Metadata display (e.g., title, description, attributes)",
                "Ownership history and provenance",
                "Smart contract details (e.g., token address, ID)",
            ],
        },
    ];
    const advanceFeatureData: TCardData = [
        {
            id: 1,
            title: "Cross-Chain Compatibility",
            description: ["Support for Ethereum, Polygon, Binance Smart Chain, Solana, etc.", "Bridge solutions for cross-chain asset movement"],
        },
        {
            id: 2,
            title: "Custom Branding",
            description: ["Fully customizable UI themes and logo placement", "Domain whitelabeling"],
        },
        {
            id: 3,
            title: "Social Features",
            description: ["Follow creators and collectors", "Activity feeds for new listings, bids, and sales", "Social media sharing buttons"],
        },
        {
            id: 4,
            title: "Community Features",
            description: ["Integrated chat or comments on NFTs", "Voting and governance tools (e.g., DAO integration)"],
        },
        {
            id: 5,
            title: "Gamification",
            description: ["Leaderboards for top creators, buyers, and sellers", "Badges and rewards for user engagement"],
        },
        {
            id: 6,
            title: "Batch Operations Batch Minting of Multiple NFTs",
            description: ["Allow you to mint multiple NFTs at one time with scheduling."],
        },
        {
            id: 7,
            title: "Gamification",
            description: ["Leaderboards for top creators, buyers, and sellers", "Badges and rewards for user engagement"],
        },
        {
            id: 8,
            title: "Batch Operations Batch Minting of Multiple NFTs",
            description: ["Allow you to mint multiple NFTs at one time with scheduling."],
        },
        {
            id: 9,
            title: "Gamification",
            description: ["Leaderboards for top creators, buyers, and sellers", "Badges and rewards for user engagement"],
        },
        {
            id: 10,
            title: "Batch Operations Batch Minting of Multiple NFTs",
            description: ["Allow you to mint multiple NFTs at one time with scheduling."],
        },
    ];

    return (
        <div className="relative h-auto">
            <img src={FeatureBGImage} className="absolute w-full h-full -top-[20rem] right-0" />
            <WrapperLayout>
                <FeatureCard title="Core Features" cardData={coreFeatureData} />
                <FeatureCard title="Advance Features" cardData={advanceFeatureData} />
                <div className="bg-[#141414] z-50 backdrop-brightness-75 flex justify-center items-center py-[1.5rem] rounded-lg gap-[1.5rem] mb-[3.75rem]">
                    <p className="text-white z-10 text-[2rem] font-normal">Let’s try it!</p>
                    <button className="cursor-pointer z-10 bg-white text-black rounded-xl font-normal text-[1.1rem py-[0.5rem] px-[1rem]">
                        Request Demo
                    </button>
                </div>
            </WrapperLayout>
        </div>
    );
};

export default Features;

// TYPES
type TCardData = Array<{
    id: number;
    title: string;
    description: Array<string>;
}>;
