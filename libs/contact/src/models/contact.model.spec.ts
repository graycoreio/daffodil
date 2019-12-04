import { DaffContactForum } from './contact.model'

describe('DaffContactForum', () => {
  it('should exist',() => {
    const forum: DaffContactForum = {email: "email@email.com", firstName: "John", lastName: "Doe"}
    expect(forum).toEqual({email: "email@email.com", firstName: "John", lastName: "Doe"});
  })
});