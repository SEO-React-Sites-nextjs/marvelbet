import FeatureTable from "../../FeatureTable";

export default function Page1() {
  const rows = [
    {
      id: "row1",
      columns: [
        "Step 1. Open App/Site",
        "Launch the Marvelbet app or visit the official website.",
      ],
    },
    {
      id: "row2",
      columns: [
        "Step 2. Enter Credentials",
        "Input your registered username and password accurately.",
      ],
    },
    {
      id: "row3",
      columns: [
        "Step 3. Complete CAPTCHA",
        "Solve any security verification or CAPTCHA check quickly.",
      ],
    },
    {
      id: "row4",
      columns: [
        "Step 4. Two-Factor Check",
        "Enter the OTP code sent to your phone or email.",
      ],
    },
    {
      id: "row5",
      columns: [
        "Step 5. Enable Automatic Login",
        "Check the Remember Me option for faster future access.",
      ],
    },
    {
      id: "row6",
      columns: [
        "Step 6. Access Dashboard",
        "Click Login to instantly reach the live cricket betting markets.",
      ],
    },
  ];
  const rows2 = [
    {
      id: "row1",
      columns: [
        "Methods 1. Mobile Login",
        "Ensure your app is updated and your internet connection is stable for smooth access.",
      ],
    },
    {
      id: "row2",
      columns: [
        "Methods 2. Facebook Login",
        "Check that your Facebook account is properly linked and authorized in your Marvelbet settings.",
      ],
    },
    {
      id: "row3",
      columns: [
        "Methods 3. Email Login",
        "Verify you are using your registered email/username combination and check spam for password reset links.",
      ],
    },
    {
      id: "row4",
      columns: [
        "Method 4. QR Code Login",
        "Ensure your camera accurately scans the latest code displayed on the desktop screen.",
      ],
    },
    {
      id: "row5",
      columns: [
        "Methods 5. Automatic Login",
        "Clear cookies/cache if automatic login fails, and re-enable the Remember Me setting.",
      ],
    },
    {
      id: "row6",
      columns: [
        "Methods 6. Forgotten Password",
        "Use the dedicated Forgot Password link on the login page to initiate the secure recovery process.",
      ],
    },
  ];

  return (
    <>
      <h2>Master Marvelbet Login Process for Instant Access</h2>
      <p>
        Master the <a href="/login">Marvelbet login</a> process and access your
        account now! We offer optimized login steps for every user, including
        mobile login and Facebook login.
      </p>
      <p>
        Learn how to use email login, QR code login, and enable automatic login.
        Never worry about a forgotten password again—your betting starts now!
      </p>
      <FeatureTable
        title="Marvelbet Login Steps"
        thead={[<>Login Step </>, <>Marvelbet Login Step Description</>]}
        rows={rows}
        key="table1"
      />
      <FeatureTable
        title="Velki IPL 2026 Season Added Features"
        thead={[<>Login Methods</>, <>Marvelbet Login Methods Description</>]}
        rows={rows2}
        key="table2"
      />
    </>
  );
}
