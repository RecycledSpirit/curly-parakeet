import React from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

const Disclaimer = () => {
  return (
    <Alert className="border-amber-200 bg-amber-50/80 mt-8">
      <AlertTriangle className="h-4 w-4 text-amber-600" />
      <AlertDescription className="text-amber-800">
        <strong>Medical Disclaimer:</strong> The information provided by CraveKind is for educational purposes only and should not be considered medical advice. Always consult with a healthcare professional before making significant dietary changes. CraveKind does not guarantee specific health outcomes from following our recommendations.
      </AlertDescription>
    </Alert>
  );
};

export default Disclaimer;