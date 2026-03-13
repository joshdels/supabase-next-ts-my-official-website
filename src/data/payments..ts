export interface PaymentsProp {
  logo: string;
  name: string;
  type: string;
  account_number: string;
  account_name: string;
  proof?: string;
}

export const payments: PaymentsProp[] = [
  {
    logo: "/payments/bdo.png",
    name: "BDO",
    type: "local",
    account_number: "003780760392",
    account_name: "Joshua S De Leon",
  },
  {
    logo: "/payments/gcash.png",
    name: "gcash",
    type: "local",
    account_number: "09652669914",
    account_name: "Joshua De Leon",
  },
  {
    logo: "/payments/wise.png",
    name: "wise - US",
    type: "international",
    account_number: "211525041123",
    account_name: "Joshua Sarno De Leon",
    proof: "/payments/proof/usd.pdf",
  },
  {
    logo: "/payments/wise.png",
    name: "wise - UK",
    type: "international",
    account_number: "56262422",
    account_name: "Joshua Sarno De Leon",
    proof: "/payments/proof/uk.pdf",
  },
];
