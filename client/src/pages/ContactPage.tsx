import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen">
      <section className="bg-card border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="font-serif text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We'd love to hear from you. Reach out with any questions or inquiries.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="hover-elevate" data-testid="card-contact-email">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold mb-2">Email Us</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Send us an email anytime
                    </p>
                    <a href="mailto:hello@dharmadecor.com" className="text-primary hover:underline">
                      hello@dharmadecor.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-contact-phone">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold mb-2">Call Us</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Mon-Sat, 9AM-6PM IST
                    </p>
                    <a href="tel:+911234567890" className="text-primary hover:underline">
                      +91 (123) 456-7890
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-contact-location">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold mb-2">Visit Us</h3>
                    <p className="text-sm text-muted-foreground">
                      Artisan Quarter<br />
                      Jaipur, Rajasthan<br />
                      India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        required
                        data-testid="input-first-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        required
                        data-testid="input-last-name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      data-testid="input-email"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 1234567890"
                      data-testid="input-phone"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest">What are you interested in?</Label>
                    <Select>
                      <SelectTrigger id="interest" data-testid="select-interest">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="brass">Brass Collection</SelectItem>
                        <SelectItem value="bronze">Bronze Collection</SelectItem>
                        <SelectItem value="wood">Wood Collection</SelectItem>
                        <SelectItem value="custom">Custom Order</SelectItem>
                        <SelectItem value="wholesale">Wholesale Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      required
                      data-testid="textarea-message"
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg" data-testid="button-submit-contact">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div>
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">Business Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Monday - Friday</span>
                        <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Saturday</span>
                        <span className="text-muted-foreground">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Sunday</span>
                        <span className="text-muted-foreground">Closed</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">Frequently Asked</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Do you ship internationally?</h4>
                    <p className="text-sm text-muted-foreground">
                      Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Can I place a custom order?</h4>
                    <p className="text-sm text-muted-foreground">
                      Absolutely! Contact us with your requirements, and our artisans will work with you to create a unique piece.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">What is your return policy?</h4>
                    <p className="text-sm text-muted-foreground">
                      We offer a 30-day return policy for unused items in original packaging. Custom orders are non-returnable.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
