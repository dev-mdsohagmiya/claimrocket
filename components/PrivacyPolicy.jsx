// components/PrivacyPolicy.js -
import React from "react";

const PrivacyPolicy = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="bg-gray-100 p-8 pt-[130px] px-[45]">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-700 mb-4">Last Updated: [{currentDate}]</p>
        <p className="text-gray-700">
          Thank you for choosing us. We are committed to protecting your privacy
          and maintaining the confidentiality of your personal information. This
          Privacy Policy explains how we collect, use, share, and protect your
          personal data when you use our services, website, and related
          applications (collectively referred to as the {`"Services"`}). By
          accessing or using our Services, you consent to the practices
          described in this Privacy Policy.
        </p>

        <h2 className="text-xl font-bold mt-6 mb-2">
          1. Information We Collect
        </h2>
        <p className="text-gray-700 mb-4">
          We collect the following types of information when you use our
          Services:
        </p>

        <h2 className="text-xl font-bold mt-6 mb-2">
          2. How We Use Your Information
        </h2>
        <p className="text-gray-700 mb-4">
          We use the information we collect for the following purposes:
        </p>

        <h2 className="text-xl font-bold mt-6 mb-2">
          3. How We Share Your Information
        </h2>
        <p className="text-gray-700 mb-4">
          We may share your information with third parties under the following
          circumstances:
        </p>

        <h2 className="text-xl font-bold mt-6 mb-2">4. Data Security</h2>
        <p className="text-gray-700 mb-4">
          We take reasonable measures to protect your personal information from
          unauthorized access, disclosure, alteration, or destruction. However,
          no data transmission over the internet or method of storage is 100%
          secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-xl font-bold mt-6 mb-2">
          5. Your Choices and Rights
        </h2>
        <p className="text-gray-700 mb-4">You have the right to:</p>

        <h2 className="text-xl font-bold mt-6 mb-2">
          6. Changes to this Privacy Policy
        </h2>
        <p className="text-gray-700 mb-4">
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or for other operational, legal, or regulatory
          reasons. We will notify you of any material changes and obtain your
          consent if required by law.
        </p>

        <h2 className="text-xl font-bold mt-6 mb-2">7. Contact Us</h2>
        <p className="text-gray-700 mb-4">
          If you have questions or concerns about this Privacy Policy or our
          data practices, please contact us at [example@yourdomain.com].
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
