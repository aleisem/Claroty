import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { CheckCircle, Shield, Users, Target, Award, BookOpen, Zap, Heart } from 'lucide-react'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const keyAlignments = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Vulnerability Management Excellence",
      description: "20+ years experience with Tenable, Qualys, Nessus, and Burp Suite - exactly the tools Claroty uses",
      highlight: "Reduced critical findings by 43% and cut remediation backlog from 1,500 to 350 issues"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Risk-Based Prioritization",
      description: "Built EPSS-enhanced scoring models incorporating CVSS, threat intelligence, and business impact",
      highlight: "Triaged 10k+ findings quarterly with 70% reduction in critical backlog"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Cross-Functional Collaboration",
      description: "Led remediation war-rooms and built partnerships across teams to improve MTTR by 40%",
      highlight: "Proven track record of translating technical findings into executive-level guidance"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "FedRAMP & Compliance Ready",
      description: "Familiar with FedRAMP processes, produced PCI DSS and HIPAA evidence, fluent in control mapping",
      highlight: "Perfect alignment with Claroty's FedRAMP High certification pursuit"
    }
  ]

  const coreValues = [
    {
      icon: <Heart className="w-5 h-5" />,
      title: "People First",
      description: "Mentored 200+ students and led diverse cybersecurity teams with focus on personal growth"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Customer Obsession",
      description: "Delivered actionable security guidance that directly improved client outcomes and compliance"
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Strive for Excellence",
      description: "Top 100 Women in Cybersecurity (2024), published researcher, regular speaker at RSA and DEF CON"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Integrity",
      description: "CISSP certified with multiple GIAC certifications, committed to ethical security practices"
    }
  ]

  const interviewers = [
    { name: "Vincent L", role: "Interview Team Member" },
    { name: "Dennis O", role: "Interview Team Member" },
    { name: "Tim H", role: "Interview Team Member" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className={`bg-white shadow-sm border-b transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Thank You, Claroty Team</h1>
              <p className="text-lg text-gray-600 mt-2">Vulnerability Management Analyst Interview Follow-up</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">From</p>
              <p className="text-xl font-semibold text-gray-900">Aleise McGowan, CISSP</p>
              <p className="text-sm text-gray-600">Cybersecurity Leader</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* Personal Thank You */}
        <section className={`transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">A Heartfelt Thank You</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg leading-relaxed">
                Thank you for the engaging conversation about Claroty's mission to secure cyber-physical systems and the critical role of vulnerability management in protecting mission-critical infrastructure. Your insights into the team's people-first culture and the exciting challenges ahead with FedRAMP High certification truly resonated with me.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                {interviewers.map((interviewer, index) => (
                  <div key={index} className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <p className="font-semibold">{interviewer.name}</p>
                    <p className="text-sm opacity-90">{interviewer.role}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Key Alignments */}
        <section className={`transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why I'm the Right Fit for Claroty</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {keyAlignments.map((alignment, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                      {alignment.icon}
                    </div>
                    <CardTitle className="text-lg">{alignment.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">{alignment.description}</p>
                  <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded">
                    <p className="text-sm font-medium text-green-800">{alignment.highlight}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Claroty Values Alignment */}
        <section className={`transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Aligned with Claroty's Core Values</CardTitle>
              <CardDescription className="text-center">
                How my experience embodies what Claroty stands for
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {coreValues.map((value, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600 flex-shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{value.title}</h3>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Technical Expertise */}
        <section className={`transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Technical Expertise Highlights</CardTitle>
              <CardDescription>
                Key technologies and frameworks that directly support Claroty's needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3 flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-yellow-500" />
                    Vulnerability Management Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Tenable', 'Qualys', 'Nessus', 'Burp Suite Pro', 'Wiz', 'Snyk'].map((tool) => (
                      <Badge key={tool} variant="secondary" className="bg-blue-100 text-blue-800">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-green-500" />
                    Compliance & Frameworks
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['FedRAMP', 'NIST 800-53', 'PCI DSS', 'HIPAA', 'ISO 27001', 'MITRE ATT&CK', 'CVSS v3.x'].map((framework) => (
                      <Badge key={framework} variant="secondary" className="bg-green-100 text-green-800">
                        {framework}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-purple-500" />
                    Cloud & Platforms
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['AWS', 'Azure', 'GCP', 'ServiceNow', 'Power BI', 'Splunk'].map((platform) => (
                      <Badge key={platform} variant="secondary" className="bg-purple-100 text-purple-800">
                        {platform}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Next Steps */}
        <section className={`transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Card className="bg-gradient-to-r from-indigo-50 to-blue-50 border-indigo-200">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Ready to Contribute</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-lg text-gray-700">
                I'm excited about the opportunity to help Claroty achieve FedRAMP High certification while building robust vulnerability management programs that protect critical infrastructure worldwide.
              </p>
              <div className="flex justify-center space-x-4">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <a href="mailto:aleise.mcgowan@gmail.com" className="flex items-center">
                    Let's Continue the Conversation
                  </a>
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Looking forward to hearing from you soon!
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-lg font-semibold">Aleise McGowan, CISSP</p>
          <p className="text-gray-400">Cybersecurity Leader | Top 100 Women in Cybersecurity (2024)</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="mailto:aleise.mcgowan@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              aleise.mcgowan@gmail.com
            </a>
            <a href="tel:6013076364" className="text-gray-400 hover:text-white transition-colors">
              (601) 307-6364
            </a>
            <a href="https://www.linkedin.com/in/aleisemcgowan" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

