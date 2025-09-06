import React, { useEffect, useRef } from "react";
import SectionHeading from "./compsDeep/SectionHeading";
import { Box, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Google from "@/public/Google.png";

/* ====== Tunables ====== */
const CARD_W = 340;
const CARD_H = 320;
const CARD_GAP = 24; // px gap between cards

/* ====== Small utilities ====== */
const srOnly = {
  position: "absolute",
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0,0,0,0)",
  whiteSpace: "nowrap",
  border: 0,
};

function StarRating({ value }) {
  return (
    <div
      aria-label={`${value} out of 5 stars`}
      style={{ display: "flex", gap: 4 }}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{
            fontSize: 16,
            lineHeight: 1,
            filter:
              i < value
                ? "drop-shadow(0 1px 2px rgba(246,173,85,.35))"
                : "none",
            color: i < value ? "#F6AD55" : "#E2E8F0",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

/* ====== Review Card (fixed size) ====== */
function ReviewCard({ name, date, reviewText, stars, platform, avatar }) {
  const initial = (name || "•").trim().charAt(0).toUpperCase();
  const platformLabel =
    platform === "google"
      ? "Google"
      : platform === "facebook"
        ? "Facebook"
        : "Review";

  return (
    <div
      role="listitem"
      aria-label={`${stars} star review by ${name} on ${platformLabel}`}
      style={{
        width: CARD_W,
        minWidth: CARD_W,
        height: CARD_H,
        background: "#fff",
        border: "1px solid #E2E8F0",
        borderRadius: 12,
        padding: 20,
        boxShadow: "0 1px 2px rgba(16,24,40,0.04)",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        transition: "box-shadow .25s ease, border-color .25s ease",
      }}
    >
      {/* header */}
      <div
        style={{
          display: "flex",
          gap: 12,
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: avatar
              ? `url(${avatar}) center/cover no-repeat`
              : "linear-gradient(135deg,#667eea,#764ba2)",
            color: "#fff",
            fontWeight: 700,
            fontSize: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(102,126,234,.25)",
            flexShrink: 0,
          }}
        >
          {!avatar && initial}
        </div>

        <div style={{ minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                fontWeight: 700,
                fontSize: 16,
                color: "#1A202C",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: 180,
              }}
              title={name}
            >
              {name}
            </div>
          </div>
          <div style={{ fontSize: 12, color: "#718096", fontWeight: 500 }}>
            {date}
          </div>
        </div>
      </div>

      {/* stars */}
      <div style={{ marginTop: 12, flexShrink: 0 }}>
        <StarRating value={stars} />
      </div>

      {/* body */}
      <div
        style={{ marginTop: 12, flex: 1, overflow: "hidden", display: "flex" }}
      >
        <p
          style={{
            margin: 0,
            fontSize: 14,
            color: "#2D3748",
            lineHeight: 1.7,
            letterSpacing: ".01em",
            display: "-webkit-box",
            WebkitLineClamp: 6,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
          title={reviewText}
        >
          {reviewText}
        </p>
      </div>
    </div>
  );
}

/* ====== Reviews Scroller (scroll + snap + drag, scrollbar visible) ====== */
function ReviewsScroller({ reviews }) {
  const scrollerRef = useRef(null);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const scrollStartRef = useRef(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        el.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const onPointerDown = (e) => {
    const el = scrollerRef.current;
    if (!el) return;
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    scrollStartRef.current = el.scrollLeft;
    el.setPointerCapture?.(e.pointerId);
    el.style.scrollSnapType = "none";
    el.style.cursor = "grabbing";
  };

  const onPointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const el = scrollerRef.current;
    if (!el) return;
    const dx = e.clientX - dragStartXRef.current;
    el.scrollLeft = scrollStartRef.current - dx;
  };

  const onPointerUp = (e) => {
    const el = scrollerRef.current;
    if (!el) return;
    isDraggingRef.current = false;
    el.releasePointerCapture?.(e.pointerId);
    requestAnimationFrame(() => {
      el.style.scrollSnapType = "x mandatory";
      el.style.cursor = "grab";
    });
  };

  return (
    <Box style={{ margin: "0 auto" }}>
      <div
        ref={scrollerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        role="list"
        aria-label="Customer reviews (scroll horizontally)"
        style={{
          display: "flex",
          gap: CARD_GAP,
          overflowX: "auto",
          overflowY: "hidden",
          paddingBottom: 8,
          scrollBehavior: "smooth",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          cursor: "grab",
        }}
      >
        {reviews.map((r, i) => (
          <div key={i} style={{ scrollSnapAlign: "start" }}>
            <ReviewCard {...r} />
          </div>
        ))}
      </div>
    </Box>
  );
}

/* ====== Main Section ====== */
export default function ReviewSection() {
  const reviews = [
    {
      name: "Jill Bills",
      date: "30 June 2025",
      reviewText:
        "The Calibre team was excellent. Polite and on time service before and after photos that clearly showed the results. Very happy",
      stars: 5,
      platform: "google",
    },
    {
      name: "Trevor Smith",
      date: "26 June 2025",
      reviewText:
        "Caleb was a very hard-working deliverer of a great service...hard to believe the before and after photos. Highly recommend this pressure clean service.",
      stars: 5,
      platform: "google",
    },
    {
      name: "Robert Swann",
      date: "11 January 2025",
      reviewText:
        "Great job done cleaning Solar panels and Gutters. Fantastic, prompt and friendly service. Highly recommend them for jobs.",
      stars: 5,
      platform: "facebook",
    },
    {
      name: "Sarah Johnson",
      date: "15 June 2025",
      reviewText:
        "Outstanding service! The team was professional, punctual, and delivered exceptional results. Will definitely use again.",
      stars: 5,
      platform: "google",
    },
    {
      name: "Mike Wilson",
      date: "8 June 2025",
      reviewText:
        "Excellent work on our driveway cleaning. The difference is remarkable. Highly recommend their services!",
      stars: 5,
      platform: "facebook",
    },
  ];

  return (
    <>
      <Box
        overflow={"hidden"}
        top={5400}
        left={0}
        bottom={0}
        zIndex={-2}
        pos={"absolute"}
        w={"100%"}
        h={"1000px"}
        bg={"#062042"}

      ></Box>
      <Box px={{ base: "4%", md: "6%", xl: "10%" }}  my={"50px"} >
        <SectionHeading
          eyebrow={"What our customers say"}
          title={"Read Some Of Our Reviews!"}
          color="white"
        />

        <HStack
          alignItems="center"
          justifyContent="center"
          py={"20px"}
          borderRadius="full"
          spacing={2}
        >
          <Image src={Google} alt="Google" width={50} height={50} />
          <HStack spacing={0.5}>
            <Text fontSize="xl" fontWeight="600" color="#fbbf24">
              5 / 5
            </Text>
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar key={i} color="#fbbf24" size={30} />
            ))}
          </HStack>
        </HStack>

        <div>
          <ReviewsScroller reviews={reviews} />
        </div>

        <span style={srOnly}>Scroll horizontally to explore review cards.</span>
      </Box>
    </>
  );
}
