import {HardDrive,Laptop,MoreVertical,Router,Search,Smartphone,} from "lucide-react";
import { useState } from "react";

import Badge from "../components/Badge";
import SectionHeader from "../components/SectionHeader";
import TopBar from "../components/TopBar";
import { assets } from "../data/mockData";

function getAssetIcon(type) {
  if (type === "laptop") {
    return Laptop;
  }

  if (type === "phone") {
    return Smartphone;
  }

  if (type === "router") {
    return Router;
  }

  return HardDrive;
}

export default function Assets() {
  const [query, setQuery] = useState("");

  const filteredAssets = assets.filter((asset) => {
    const searchableText = `${asset.name} ${asset.id} ${asset.user} ${asset.type}`;

    return searchableText
      .toLowerCase()
      .includes(query.toLowerCase());
  });

  return (
     <main className="min-h-screen bg-background px-5 pb-24 pt-24 text-foreground">
          <div className="mx-auto max-w-3xl">
            <TopBar title="Assets" action="none" />

        <section className="mt-4">
          <div className="relative">
            <Search
              size={18}
              aria-hidden="true"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"/>

            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search assets"
              aria-label="Search assets"
              className="w-full rounded-2xl border border-input bg-card py-3 pl-11 pr-4 text-sm text-card-foreground outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"/>
          </div>
        </section>

        <section className="mt-6">
          <SectionHeader
            title="Asset inventory"
            link={`${assets.length} total`}/>

          <div className="mt-3 space-y-3">
            {filteredAssets.length === 0 ? (
              <div className="rounded-2xl border border-border bg-card p-8 text-center">
                <HardDrive
                  size={28}
                  aria-hidden="true"
                  className="mx-auto text-muted-foreground"/>

                <p className="mt-3 text-sm font-semibold text-card-foreground">
                  No assets found
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Try a different search term.
                </p>
              </div>
            ) : (
              filteredAssets.map((asset) => {
                const Icon = getAssetIcon(asset.icon);

                return (
                  <article
                    key={asset.id}
                    className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 text-card-foreground shadow-sm transition-colors hover:border-primary hover:bg-accent">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-secondary text-primary">
                      <Icon size={21} aria-hidden="true" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="truncate text-sm font-bold text-card-foreground">
                          {asset.name}
                        </h2>

                        <Badge>{asset.status}</Badge>
                      </div>

                      <p className="mt-1 text-xs text-muted-foreground">
                        {asset.id} · {asset.type}
                      </p>

                      <p className="mt-2 text-xs font-medium text-muted-foreground">
                        Assigned to {asset.user}
                      </p>
                    </div>

                    <button
                      type="button"
                      aria-label={`More options for ${asset.name}`}
                      className="rounded-xl p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                      <MoreVertical size={19} aria-hidden="true" />
                    </button>
                  </article>
                );
              })
            )}
          </div>
        </section>
      </div>
    </main>
  );
}