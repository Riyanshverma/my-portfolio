import { type SocialBadgeProp } from "@/Types/types";
import { SiLinkedin, SiInstagram, SiPeerlist, SiCodingninjas, SiGmail, SiCodechef, SiHackerrank, SiLeetcode, SiGeeksforgeeks, SiSnapchat } from "react-icons/si";
import { SlSocialTwitter } from "react-icons/sl";

const socialInfo: SocialBadgeProp[] = [
  { link: "https://peerlist.io/riyanshverma", icon: SiPeerlist, label: "Peerlist" },
  { link: "https://www.naukri.com/code360/profile/riyanshverma01", icon: SiCodingninjas, label: "Coding Ninjas" },
  { link: "https://instagram.com/sync.riyansh", icon: SiInstagram, label: "Instagram" },
  { link: "https://linkedin.com/in/riyansh-verma", icon: SiLinkedin, label: "LinkedIn" },
  { link: "https://x.com/RIYAnsh01", icon: SlSocialTwitter, label: "Twitter" },
  { link: "mailto:riyanshverma01.2004@gmail.com", icon: SiGmail, label: "Gmail" },
  { link: "https://www.codechef.com/users/riyanshverma", icon: SiCodechef, label: "CodeChef" },
  { link: "https://www.hackerrank.com/riyanshverma01", icon: SiHackerrank, label: "HackerRank" },
  { link: "https://leetcode.com/riyanshverma01", icon: SiLeetcode, label: "LeetCode" },
  { link: "https://auth.geeksforgeeks.org/user/riyanshverma01", icon: SiGeeksforgeeks, label: "GeeksforGeeks" },
  { link: "https://www.snapchat.com/add/riyansh_verma01", icon: SiSnapchat, label: "Snapchat" },
]

export { socialInfo }