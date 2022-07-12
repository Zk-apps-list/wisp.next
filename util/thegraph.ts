import { gql } from "@apollo/client";

export type GetPaymentsResult = {
  payments: Payment[]
}

export type Payment = {
  id: string,
  publicKey: string,
  commitment: string,
  encryptedData: string,
  sender: string,
  txHash: string,
  blockTimestamp: string,
}

export const GET_PAYMENTS_QUERY = gql`
    query GetPayments ($publicKeys: [String!]) {
        payments(
            where: {publicKey_in: $publicKeys}
            orderBy: blockTimestamp
            orderDirection: desc
        ) {
            id
            publicKey
            commitment
            encryptedData
            sender
            txHash
            blockTimestamp
        }
    }
`;