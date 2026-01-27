import { useForm } from "react-hook-form";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";
import { SiMaildotru } from "react-icons/si";
import { type ContactFormProp } from "@/Types/types";
import axios, { type AxiosResponse } from "axios";
import { toast } from "sonner";

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful }} = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async ({ name, email, message }: ContactFormProp) => {
    try {
      const response: AxiosResponse = await axios.post("https://api.web3forms.com/submit",{
        access_key: import.meta.env.VITE_MAIL_API_KEY,
        name: name,
        email: email,
        message: message
      })
      if(!response.data.success) {
        throw new Error("Balli")
      }
    } catch(error) {
      console.log("Talli");
    }
  };

  return (
    <div className="flex flex-col gap-6 mt-4">
      {/* Heading: left-aligned */}
      <div className="flex flex-wrap items-baseline gap-3 text-6xl text-left text-accent-foreground">
        <span className="tracking-tight">Contact</span>
        <span className="text-accent-foreground/60 text-lg">
          Get in touch with me.
        </span>
      </div>
      <div className="w-full h-px bg-accent-foreground" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 max-w-3xl mx-auto w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name" className="text-lg">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Your name"
              className="border-accent-foreground/60"
              {...register("name", {
                required: "Name is required",
                minLength: { value: 3, message: "At least 3 characters" },
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email" className="text-lg">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              className="border-accent-foreground/60 "
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="message" className="text-lg">Message</Label>
          <Textarea
            id="message"
            rows={5}
            placeholder="Your message"
            className="border-accent-foreground/60"
            {...register("message", {
              required: "Message is required",
              minLength: { value: 5, message: "At least 5 characters" },
            })}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>
        <Button type="submit" className="w-full md:w-auto px-4 py-2 text-base hover:bg-accent-foreground/70 flex items-center gap-2" disabled={isSubmitting}>
          <SiMaildotru size={18} className="mr-1" />
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactPage;