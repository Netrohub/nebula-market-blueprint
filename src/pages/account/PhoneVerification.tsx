import { useState } from "react";
import AccountLayout from "@/components/AccountLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Smartphone,
  Send,
  CheckCircle2,
  ArrowLeft,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";

const PhoneVerification = () => {
  const { toast } = useToast();
  const [step, setStep] = useState<'input' | 'verify' | 'success'>('input');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendOTP = async () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid phone number",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate OTP sending
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setStep('verify');
    
    toast({
      title: "OTP Sent!",
      description: `A 6-digit code has been sent to ${phoneNumber}`,
    });
  };

  const handleOTPChange = (index: number, value: string) => {
    if (value.length > 1) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleVerifyOTP = async () => {
    const otpCode = otp.join('');
    
    if (otpCode.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter all 6 digits",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate OTP verification
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setStep('success');
    
    toast({
      title: "Phone Verified!",
      description: "Your phone number has been successfully verified.",
    });
  };

  const handleResendOTP = async () => {
    setIsLoading(true);
    
    // Simulate resending OTP
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    
    toast({
      title: "OTP Resent",
      description: "A new code has been sent to your phone.",
    });
  };

  return (
    <AccountLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <Link 
            to="/account/kyc" 
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to KYC Verification
          </Link>
          <h1 className="text-3xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
            Phone Verification
          </h1>
          <p className="text-foreground/60">Secure your account with phone number verification</p>
        </div>

        {step === 'input' && (
          <Card className="glass-card p-6 max-w-2xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground mb-2">Enter Your Phone Number</h2>
                <p className="text-sm text-foreground/60">
                  We'll send you a 6-digit verification code via SMS
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground">
                  Phone Number
                </Label>
                <div className="relative">
                  <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/70" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="pl-10 glass-card border-border/50 focus:border-primary/50"
                  />
                </div>
                <p className="text-xs text-foreground/50">
                  Standard messaging rates may apply
                </p>
              </div>

              <Button 
                className="btn-glow w-full" 
                onClick={handleSendOTP}
                disabled={isLoading}
              >
                <Send className="h-4 w-4 mr-2" />
                {isLoading ? 'Sending...' : 'Send Verification Code'}
              </Button>
            </div>
          </Card>
        )}

        {step === 'verify' && (
          <Card className="glass-card p-6 max-w-2xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground mb-2">Enter Verification Code</h2>
                <p className="text-sm text-foreground/60">
                  We sent a 6-digit code to {phoneNumber}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Label className="text-foreground mb-3 block">Verification Code</Label>
                <div className="flex gap-2 justify-center">
                  {otp.map((digit, index) => (
                    <Input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOTPChange(index, e.target.value)}
                      className="w-12 h-12 text-center text-lg font-bold glass-card border-border/50 focus:border-primary/50"
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Button 
                  className="btn-glow w-full" 
                  onClick={handleVerifyOTP}
                  disabled={isLoading}
                >
                  {isLoading ? 'Verifying...' : 'Verify Phone Number'}
                </Button>
                
                <div className="text-center">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={handleResendOTP}
                    disabled={isLoading}
                    className="text-primary hover:text-primary/80"
                  >
                    Didn't receive the code? Resend
                  </Button>
                </div>

                <Button 
                  variant="outline" 
                  className="glass-card border-border/50 w-full"
                  onClick={() => setStep('input')}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Change Phone Number
                </Button>
              </div>
            </div>
          </Card>
        )}

        {step === 'success' && (
          <Card className="glass-card p-6 max-w-2xl border border-primary/30">
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 border-2 border-primary mb-6">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              
              <h2 className="text-2xl font-bold text-foreground mb-2">Phone Verified Successfully!</h2>
              <p className="text-foreground/60 mb-8">
                Your phone number {phoneNumber} has been verified
              </p>

              <div className="space-y-3">
                <Button asChild className="btn-glow w-full">
                  <Link to="/account/kyc">
                    <CheckCircle2 className="h-4 w-4 mr-2" />
                    Continue to KYC Verification
                  </Link>
                </Button>
                
                <Button asChild variant="outline" className="glass-card border-border/50 w-full">
                  <Link to="/account/dashboard">
                    Go to Dashboard
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Security Info */}
        <Card className="glass-card p-6 border border-border/30 max-w-2xl">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">Why Verify Your Phone?</h3>
              <div className="space-y-2 text-sm text-foreground/70">
                <p>✓ Enhanced account security with two-factor authentication</p>
                <p>✓ Receive important account notifications via SMS</p>
                <p>✓ Faster account recovery if you forget your password</p>
                <p>✓ Required for completing KYC verification</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </AccountLayout>
  );
};

export default PhoneVerification;
