"use server";
import { sql } from "@vercel/postgres";
import React from "react";

type Props = {
  name: string;
  email: string;
};

export default async function insertAction({ name, email }: Props) {
  try {
    await sql`INSERT INTO portfolio (name, email) 
  VALUES (${name}, ${email});`;
    console.log("inserted");
  } catch (error) {
    console.log(error);
  }
}
