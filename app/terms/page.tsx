import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export default function Terms() {
  return (
    <div className="w-full flex justify-center p-10">
      <div className="w-full max-w-screen-md space-y-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-500 hover:text-gray-700 underline"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back to Chatbot
        </Link>
        <h1 className="text-3xl font-bold">Rami</h1>
        <h2 className="text-2xl font-semibold">
          Terms of Use and Disclaimer for Rami
        </h2>
        <ol className="list-decimal list-inside space-y-4">
          <li className="text-gray-700">
            <span className="font-semibold">Acceptance of Terms:</span> By
            accessing and using Rami ("Chatbot") provided by Gloriana
            ("Provider"), you acknowledge that you have read, understood, and
            agreed to be bound by these Terms of Use. If you do not agree with
            these terms, do not use Rami.<span className="font-semibold">Rami is a student-made, capstone project for the MBA
            742: Data Science and AI Course and is in no way associated with or endorsed by
            the University of North Carolina at Chapel Hill or the Kenan-Flagler Business School. </span>
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">Purpose and Scope:</span> The Chatbot is
            provided "as is" and "as available" without any warranties, express
            or implied. Gloriana makes no representations or warranties regarding
            the accuracy, reliability, completeness, or suitability of Rami
            for any purpose. To the fullest extent permitted by law, all
            warranties, including but not limited to implied warranties of
            merchantability, fitness for a particular purpose, and
            non-infringement, are expressly disclaimed.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">
              No Guarantees on Availability or Support:
            </span>{" "}
            Gloriana does not guarantee that Rami will be available at all
            times, be uninterrupted, secure, or error-free. No technical
            support, maintenance, or updates are guaranteed or required to be
            provided.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">Limitation of Liability:</span> To
            the fullest extent permitted by applicable law, Gloriana shall not be
            liable for any direct, indirect, incidental, consequential, special,
            exemplary, or punitive damages arising from or related to your use
            of or inability to use the Rami. This includes but is not limited
            to loss of profits, data, business, or any other losses, even if
            Rami has been advised of the possibility of such damages.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">
              No Legal, Financial, or Professional Advice:
            </span>{" "}
            Rami is intended for informational and general purposes only.
            It does not constitute legal, financial, medical, or professional
            advice. Any reliance on the information provided by Rami is
            at your own risk.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">User Responsibility:</span> You are
            solely responsible for your use of Rami and any actions or
            decisions made based on its output. Gloriana is not responsible for any
            consequences resulting from the use or misuse of the Rami.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">Data Security and Privacy:</span>{" "}
            You acknowledge that any data transmitted to or through the Rami
            is not secured and may be processed by third parties. Do not upload,
            share, or transmit any sensitive, confidential, or personal
            information. All conversations conducted through Rami are
            considered equivalent to public postings, and Rami does not
            guarantee the confidentiality or security of any data shared.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">Indemnification:</span> You agree to
            indemnify, defend, and hold harmless Gloriana from any claims,
            liabilities, damages, losses, and expenses, including reasonable
            legal fees, arising from your use of the Rami or violation of
            these Terms of Use.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">Modifications to Terms:</span> Gloriana
            reserves the right to modify these Terms of Use at any time without
            prior notice. Continued use of the Rami constitutes acceptance of
            the modified terms.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">Governing Law:</span> These Terms of
            Use shall be governed by and construed in accordance with the laws
            of the applicable jurisdiction without regard to its conflict of law
            provisions.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">Contact Information:</span> If you
            have any questions or concerns regarding these Terms of Use, please
            contact Gloriana at gloryocostarica@gmail.com.
          </li>
        </ol>
      </div>
    </div>
  );
}
