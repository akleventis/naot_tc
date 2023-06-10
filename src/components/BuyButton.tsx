// import styles from "@/styles/Home.module.css";
{
  /* <main className={`${styles.main} ${inter.className}`}></main> */
}

export default function BuyButtonComponent({buyButtonID, buyButtonKey}: {buyButtonID: string; buyButtonKey: string}) {
  return (
    <stripe-buy-button buy-button-id={buyButtonID} publishable-key={buyButtonKey} />
  );
}
