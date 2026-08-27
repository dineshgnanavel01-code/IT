import {Bell,CheckCircle2,Info,Ticket,} from "lucide-react";

import TopBar from "../components/TopBar";
import { activities } from "../data/mockData";

const iconMap = {
  ticket: Ticket,
  check: CheckCircle2,
  bell: Bell,
  laptop: Info,
};

export default function Notifications() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl animate-float-in">
        <TopBar
          title="Notifications"
          back
          action="none"/>

        <div className="px-5 pb-24">
          <div className="flex items-center justify-between border-b border-border py-5">
            <div>
              <p className="text-xs font-medium text-muted-foreground">
                You have{" "}
                <span className="font-bold text-foreground">
                  4 new
                </span>{" "}
                updates.
              </p>
            </div>

            <button
              type="button"
              className="text-xs font-bold text-primary transition-colors hover:text-primary/80">
              Mark all read
            </button>
          </div>

          <section className="mt-5 space-y-3">
            {activities.map((item, index) => {
              const Icon = iconMap[item.icon] || Bell;
              const isUnread = index < 2;

              return (
                <article
                  key={`${item.title}-${index}`}
                  className={`
                    relative flex gap-4 rounded-2xl border p-4
                    transition-all duration-200
                    ${
                      isUnread
                        ? "border-teal-100 bg-card shadow-sm hover:border-primary/30 hover:shadow-md"
                        : "border-transparent bg-muted/30 hover:border-border hover:bg-card"
                    }
                  `}>
                  {isUnread && (
                    <span
                      className="absolute right-4 top-4 h-2.5 w-2.5 rounded-full bg-primary"
                      aria-label="Unread notification"/>
                  )}

                  <div
                    className={`
                      grid h-11 w-11 shrink-0 place-items-center rounded-xl
                      ${
                        isUnread
                          ? "bg-primary/10 text-primary"
                          : "bg-muted text-muted-foreground"
                      }
                    `}>
                    <Icon
                      size={19}
                      strokeWidth={2}
                      aria-hidden="true"/>
                  </div>

                  <div className="min-w-0 flex-1 pr-5">
                    <div className="flex items-center gap-2">
                      <h2
                        className={`
                          truncate text-sm
                          ${
                            isUnread
                              ? "font-bold text-card-foreground"
                              : "font-semibold text-muted-foreground"
                          }
                        `}>
                        {item.title}
                      </h2>
                    </div>

                    <p
                      className={`
                        mt-1 text-xs leading-5
                        ${
                          isUnread
                            ? "text-muted-foreground"
                            : "text-muted-foreground/80"
                        }
                      `}>
                      {item.detail}
                    </p>

                    <div className="mt-3 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-border" />

                      <time className="text-[10px] font-medium text-muted-foreground">
                        {item.time}
                      </time>
                    </div>
                  </div>
                </article>
              );
            })}
          </section>

          <div className="mt-8 text-center">
            <p className="text-xs text-muted-foreground">
              You're all caught up.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}