import * as express from "express";
import PromoCode from "../model/promo-code";

export class PromoCodeController {
  insert = async (req: express.Request, res: express.Response) => {
    const userId = req.body.userId;
    const packageId = req.body.packageId;
    const quantity = req.body.quantity;
    const price = req.body.price;
    const promoCodeId = req.body.promoCodeId;
    const status = req.body.status;

    const tickets = await PromoCode.find().sort({ id: -1 }).limit(1);
    let newTicketId = 0;
    if (tickets.length > 0) {
      newTicketId = tickets[0].id + 1;
    }

    const newTicket = new PromoCode({
      id: newTicketId,
      userId: userId,
      packageId: packageId,
      quantity: quantity,
      price: price,
      promoCodeId: promoCodeId,
      status: status,
    });

    newTicket
      .save()
      .then(() => {
        res.status(200).json({ message: "Ok" });
      })
      .catch(() => {
        res.json({ message: "Error" });
      });
  };

  update = async (req: express.Request, res: express.Response) => {
    const ticketId = parseInt(req.body.ticketId);
    await PromoCode.updateOne({ id: ticketId }, { $set: { status: "accepted" } });

    let errors: Array<String> = [];
    PromoCode.findOne({ id: ticketId }, (err: any, ticket: any) => {
      if (err || ticket == null || !ticket) {
        errors.push("Doslo je do greske prilikom azuriranja podataka.");
        res.json({ errors: errors });
      } else {
        res.status(200).json({ ticket: ticket });
      }
    });
  };
}
