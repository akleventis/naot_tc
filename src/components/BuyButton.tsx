// import styles from "@/styles/Home.module.css";
{
  /* <main className={`${styles.main} ${inter.className}`}></main> */
}

export default function BuyButtonComponent({buyButtonID, buyButtonKey}: {buyButtonID: string; buyButtonKey: string}) {
  console.log(buyButtonID)
  console.log(buyButtonKey)
  return (
    // <stripe-buy-button
    // buy-button-id="buy_btn_1NH9ViD6jiafmpE3gsUN6AHN"
    // publishable-key="pk_test_51NFfY3D6jiafmpE38xBE78d7ToSPLZd4s1P9idrr7Y9AE4VjjTwK1BdqmVFZMSmZ2vO8vUNXt9VosK5ty5DZmIDf00HQv2fvZv"
    // />
    <stripe-buy-button buy-button-id={buyButtonID} publishable-key={buyButtonKey} />
  );
}
