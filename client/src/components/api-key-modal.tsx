import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, Key } from "lucide-react";

interface ApiKeyModalProps {
  isOpen: boolean;
  onSubmit: (apiKey: string) => void;
}

export function ApiKeyModal({ isOpen, onSubmit }: ApiKeyModalProps) {
  const [apiKey, setApiKey] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const key = apiKey.trim();
    
    if (!key) {
      setError("API key harus diisi");
      return;
    }
    
    if (!key.startsWith("sk-")) {
      setError("API key tidak valid. Pastikan dimulai dengan 'sk-'");
      return;
    }

    setError("");
    onSubmit(key);
  };

  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
              <Key className="w-8 h-8 text-white" />
            </div>
          </div>
          <DialogTitle className="text-center text-xl font-semibold">
            Setup OpenAI API Key
          </DialogTitle>
          <p className="text-center text-sm text-muted-foreground">
            Masukkan API key untuk memulai percakapan dengan Luna
          </p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="apiKey">API Key</Label>
            <Input
              id="apiKey"
              type="password"
              placeholder="sk-..."
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="font-mono"
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>
          
          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            <Shield className="w-4 h-4 text-green-500" />
            <span>API key disimpan lokal dan tidak dibagikan</span>
          </div>
          
          <Button type="submit" className="w-full">
            Mulai Chat
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

