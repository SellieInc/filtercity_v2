import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Award, Users, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">About Fiter City</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            For over two decades, Fiter City has been the trusted name in filtration solutions. We specialize in providing premium oil, air, and water filters, along with comprehensive industrial filtration systems that ensure optimal performance and longevity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          <Card className="border-2 hover:shadow-industrial-lg transition-all">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Quality Assurance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Every product we offer meets the highest industry standards. We rigorously test all filters to ensure they deliver exceptional performance and reliability.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-industrial-lg transition-all">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Industry Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                With over 20 years in the filtration industry, our team brings unmatched expertise and knowledge to every project and product recommendation.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-industrial-lg transition-all">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Customer Focus</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We prioritize our customers' needs, offering personalized solutions and dedicated support to ensure complete satisfaction with every purchase.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-industrial-lg transition-all">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Precision Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We provide precisely engineered filtration solutions tailored to meet the specific requirements of various industries and applications.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-secondary p-12 rounded-lg max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Our Commitment</h2>
          <p className="text-lg text-muted-foreground text-center leading-relaxed">
            At Fiter City, we are committed to delivering filtration products that not only meet but exceed expectations. Whether you need oil filters for automotive applications, air filters for clean environments, or complete industrial filtration systems, we have the expertise and product range to serve you effectively.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
