import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as messages from "../../assets/data/messages.json"
@Injectable({
  providedIn: 'root'
})
export class DiscussionService {

  messages = (messages as any).default as { [key: string]: string[][] }

  private discussionSubject = new BehaviorSubject<string[]>(["Bonjour !"])
  discussionObs = this.discussionSubject.asObservable()

  constructor() { }

  sendMessage(messageKey: string) {
    const messagePossibilitiesNb = this.messages[messageKey].length

    const messageNb = Math.floor(Math.random() * (messagePossibilitiesNb))

    this.discussionSubject.next(this.messages[messageKey][messageNb])
  }
}
