import Stripe from 'stripe'
import {NextResponse} from 'next/server'
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
const host = process.env.NEXT_PUBLIC_HOST;

export async function POST(req,res) {
  
  const  body  = await req.json()
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
          
            // price_data: {
            
            //   currency: "inr",
            //   product_data: {
            //     name: "Skryptly Subscription",
            //     description:`${body?.amount ===14?' Monthly Subscription':' Yearly Subscription' }`,

            //   },
              
            //   unit_amount: body?.amount * 100 || 100,
            // },
            price: body?.productId,
            quantity: 1,
          },
        ],
        mode: "subscription",
        cancel_url: `${host}`,
        success_url: `${host}/checkout?sessionId={CHECKOUT_SESSION_ID}`,
      });
    return  NextResponse.json({ sessionId: session.id },{status:200})
    } catch (err) {
      console.log('Error checkout session',err)
      return NextResponse.json({ error: "Error checkout session" },{status:500})
    }
  
}