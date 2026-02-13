import List "mo:core/List";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  let contactRequests = List.empty<ContactRequest>();

  type ContactRequest = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Time.Time;
  };

  public shared ({ caller }) func submitContactRequest(name : Text, email : Text, phone : Text, message : Text) : async () {
    // No authorization check - contact form should be publicly accessible to everyone including guests
    let contactRequest = {
      name;
      email;
      phone;
      message;
      timestamp = Time.now();
    };

    contactRequests.add(contactRequest);
  };

  public query ({ caller }) func getAllContactRequests() : async [ContactRequest] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view contact requests");
    };

    contactRequests.toArray();
  };
};
