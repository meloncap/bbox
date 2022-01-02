const navigation = [
  {
    name: "Twitter",
    href: "https://twitter.com/dao_leno",
    icon: (props) => (
      <svg
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: "Discord",
    href: "https://discord.gg/bvy9h4GNXr",
    icon: (props) => (
      <svg
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 127.14 96.36"
        {...props}
      >
        <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer class="tems-center p-4 footer rounded-box mt-7">
      <div class="grid-flow-col gap-4 place-self-center md:justify-self-end md:order-2">
        {navigation.map((item) => (
          <a key={item.name} href={item.href}>
            <item.icon aria-hidden="true" />
          </a>
        ))}
      </div>
      <div class="items-center place-self-center md:place-self-start grid-flow-col md:order-1">
        <p>&copy; 2021 BBoxDAO, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
