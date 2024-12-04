import Link from "next/link";

export const Navbar = () => {
  return (
    <nav
      style={{
        width: "100%",
        height: "100%",
        padding: "0 25px",
        background: "#FEFAE0",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Brand Name */}
      <div
        style={{
          width: 332,
          height: 134,
          color: "black",
          fontSize: 48,
          fontFamily: "Climate Crisis, sans-serif",
          fontWeight: "400",
          wordWrap: "break-word",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          myCloset
        </Link>
      </div>

      {/* Navigation Links */}
      <div
        style={{
          height: 57,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 40,
        }}
      >
        <div style={{ width: 336, height: 57, position: "relative" }}>
          <div
            style={{
              width: 336,
              height: 57,
              background: "#E9EDC9",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: 30,
              position: "absolute",
            }}
          />
          <Link
            href="/marketplace"
            style={{
              width: 314,
              height: 57,
              position: "absolute",
              textAlign: "center",
              color: "black",
              fontSize: 32,
              fontFamily: "Climate Crisis, sans-serif",
              fontWeight: "400",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
            }}
          >
            Marketplace
          </Link>
        </div>

        <div style={{ width: 336, height: 57, position: "relative" }}>
          <div
            style={{
              width: 336,
              height: 57,
              background: "#E9EDC9",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: 30,
              position: "absolute",
            }}
          />
          <Link
            href="/closet"
            style={{
              width: 314,
              height: 57,
              position: "absolute",
              textAlign: "center",
              color: "black",
              fontSize: 32,
              fontFamily: "Climate Crisis, sans-serif",
              fontWeight: "400",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
            }}
          >
            Closet
          </Link>
        </div>
      </div>
    </nav>
  );
};
