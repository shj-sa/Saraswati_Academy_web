import React, { useEffect } from "react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import axios from "axios";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
} from "../components/ui/select";
import PhoneNumber from "../components/ui/PhoneNoInput";
import { X } from "lucide-react"; // Import X icon
import server from "../server.json";
import { toast } from "react-toastify";
const courseLabels = {
  "beginners-hindi": "Beginners Hindi",
  "intermediate-hindi": "Intermediate Hindi",
  "advance-hindi": "Advance Hindi",
  "p1-p6": "P1 - P6",
  "sec-o-level": "Sec. - O-level",
  "other-board": "Other Board Curriculum",
  "conversation-kids-adults": "All Kids and Adult",
};

const EnquiryForm = ({ onClose }) => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    note: "",
  });
  const [loading, setLoading] = React.useState(false);

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleCourseChange = (value) => {
    setForm({
      ...form,
      course: value,
    });
  };

  const handleReset = () => {
    setForm({
      name: "",
      email: "",
      contact: "",
      course: "",
      note: "",
    });
    onClose();
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}${server.Enquiry}`,
        form,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200 || response.status === 201) {
        toast.success(
          "Enquiry submitted successfully. We'll get back to you soon."
        );
        handleReset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="relative max-w-xl mx-auto">
      <Card className="rounded-2xl shadow-md relative">
        {/* Cross button */}
        <button
          onClick={handleReset}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
        >
          <X className="w-5 h-5" />
        </button>

        <CardContent className="space-y-6 p-6">
          <h2 className="text-2xl font-semibold">Enquiry Form</h2>

          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleInputChange}
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleInputChange}
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact">Phone Number</Label>
            <PhoneNumber
              setNumber={(number) => setForm({ ...form, contact: number })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="course">Select a Course</Label>
            <Select
              value={form.course}
              onValueChange={handleCourseChange}
              disabled={loading}
            >
              <SelectTrigger className="w-full">
                {form.course ? courseLabels[form.course] : "Select a course"}
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Language Enrichment Program</SelectLabel>
                  <SelectItem value="beginners-hindi">
                    Beginners Hindi
                  </SelectItem>
                  <SelectItem value="intermediate-hindi">
                    Intermediate Hindi
                  </SelectItem>
                  <SelectItem value="advance-hindi">Advance Hindi</SelectItem>
                </SelectGroup>

                <SelectGroup>
                  <SelectLabel>MOE based Curriculum</SelectLabel>
                  <SelectItem value="p1-p6">P1 - P6</SelectItem>
                  <SelectItem value="sec-o-level">Sec. - O-level</SelectItem>
                  <SelectItem value="other-board">
                    Other Board Curriculum
                  </SelectItem>
                </SelectGroup>

                <SelectGroup>
                  <SelectLabel>Conversational Classes</SelectLabel>
                  <SelectItem value="conversation-kids-adults">
                    All Kids and Adult
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="note">Note</Label>
            <Textarea
              disabled={loading}
              id="note"
              placeholder="Any specific requests or notes..."
              value={form.note}
              onChange={handleInputChange}
            />
          </div>

          <Button
            className="w-full flex items-center justify-center"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-4 w-4 mr-2 text-white"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  />
                </svg>
                Submitting...
              </>
            ) : (
              "Submit Enquiry"
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default EnquiryForm;
