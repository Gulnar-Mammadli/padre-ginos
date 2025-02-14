import { useMutation } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";
import { postContact } from "../api/postContact";

export const Route = createLazyFileRoute("/contact")({
  component: ContactRoute,
});

function ContactRoute() {
  const mutation = useMutation({
    mutationKey: "contact",
    mutationFn: async function (e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      return await postContact(
        formData.get("name"),
        formData.get("email"),
        formData.get("message"),
      );
    },
  });

  if (mutation.isError) {
    return <h3>Something went wrong!</h3>;
  }

  return (
    <div className="contact">
      <h2>Contact</h2>
      {mutation.isSuccess ? (
        <h3>Submitted!</h3>
      ) : (
        <form className="contact-form" onSubmit={mutation.mutateAsync}>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <textarea placeholder="Message" name="message" />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}
