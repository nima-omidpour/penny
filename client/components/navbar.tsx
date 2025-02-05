import { WalletButton } from "@/components/wallet-button";

export function Navbar() {
  return (
    <nav className="border-b border-zinc-800 bg-[#111111]">
      <div className="flex h-[65px] items-center px-8">
        {/* ... other navbar items ... */}
        <div className="ml-auto flex items-center space-x-4">
          <WalletButton />
        </div>
      </div>
    </nav>
  );
}
