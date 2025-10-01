import { NextResponse } from "next/server";
import { db } from "../../../database";
import { Hero } from "../../../models";

  export async function POST(req: Request, res: Response) {
    try {
      await db.connect();
      const {image, titles = [], title0, title1, title2, description} = await req.json()
 
      const newHero = new Hero({ 
        image,
        titles,
        title0,
        title1,
        title2,
        description, 
       
      });
      await newHero.save();

      return new Response(JSON.stringify(newHero), {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (error) {
      console.log(error);
      return new Response(JSON.stringify(error), {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }

  export async function GET(req: Request, res: Response) {
    try {
      await db.connect();

      const HeroList = await Hero.find()

      return new Response(JSON.stringify(HeroList), {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (error) {
      console.log(error);
      return new Response(JSON.stringify(error), {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }