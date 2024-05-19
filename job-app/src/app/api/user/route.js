import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    return NextResponse.json({
      success: true,
      msg: "User fetched Successufully.",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      msg: "Error in getting user",
      error: error.message,
    });
  }
};
