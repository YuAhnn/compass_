import { User, CheckSquare, Calendar, MessageSquare } from "lucide-react";

//refactor: create reusable input, select, and radio components
export default function ReferralForm() {
  return (
    <form className="max-w-3xl mx-auto bg-base-100 border border-neutral/20 rounded-lg p-6 md:p-8 space-y-8">

      {/* Contact */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-primary text-sm font-semibold">
          <User size={16} /> Your Contact Details
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input 
            type="text" 
            placeholder="Enter your full name" 
            className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"/>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input 
            type="email" 
            placeholder="Enter your email address" 
            className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"/>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input 
            type="tel" 
            placeholder="e.g. 09123456789" 
            className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"/>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Best Way to Reach You</span>
            </label>
            <select 
            defaultValue="" 
            className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary">
              <option disabled value="">Choose one</option>
              <option>Email</option>
              <option>Phone Call</option>
              <option>Text Message</option>
            </select>
          </div>
        </div>
      </section>

      {/* Service */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-primary text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary">
          <CheckSquare size={16} /> Service Preferences
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">What do you need help with?</span>
            </label>
            <select 
            defaultValue="" 
            className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary">
              <option disabled value="">Select an option</option>
              <option>Individual Therapy</option>
              <option>Psychiatric Consultation</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">How would you like to meet?</span>
            </label>
            <select 
            defaultValue="" 
            className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary">
              <option disabled value="">Select one</option>
              <option>Online</option>
              <option>In Person</option>
            </select>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="space-y-5">
        <div className="flex items-center gap-2 text-primary text-sm font-semibold">
          <Calendar size={16} /> Schedule
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Which day works best for you?</span>
          </label>
          <select 
          defaultValue="" 
          className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary">
            <option disabled value="">Choose a day</option>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">What time works best?</span>
          </label>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <label className="flex items-start gap-3 border border-neutral/20 rounded-lg p-4 cursor-pointer hover:border-primary">
              <input 
              type="radio" 
              name="time" 
              className="radio radio-primary mt-1" />
              <div>
                <p className="font-medium">Morning</p>
                <p className="text-sm text-gray-500">8am - 12pm</p>
              </div>
            </label>

            <label className="flex items-start gap-3 border border-neutral/20 rounded-lg p-4 cursor-pointer hover:border-primary">
              <input 
              type="radio" 
              name="time" 
              className="radio radio-primary mt-1" />
              <div>
                <p className="font-medium">Afternoon</p>
                <p className="text-sm text-gray-500">12pm - 5pm</p>
              </div>
            </label>

            <label className="flex items-start gap-3 border border-neutral/20 rounded-lg p-4 cursor-pointer hover:border-primary">
              <input 
              type="radio" 
              name="time" 
              className="radio radio-primary mt-1" />
              <div>
                <p className="font-medium">Evening</p>
                <p className="text-sm text-gray-500">5pm - 8pm</p>
              </div>
            </label>

          </div>
        </div>
      </section>

      {/* Notes */}
      <section className="space-y-3">
        <div className="flex items-center gap-2 text-primary text-sm font-semibold">
          <MessageSquare size={16} /> Anything Else?
        </div>

        <textarea
          className="textarea textarea-bordered w-full h-24 resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          placeholder="Share anything you'd like us to know (optional)"
        />
      </section>

      {/* Submit */}
      <button 
        type="submit" 
        className="btn btn-primary w-full hover:bg-[#3fb18534] hover:text-accent-content transition-all duration-200 ease-in-out border-none rounded-field dark:text-white">
        Send Request
      </button>
    </form>
  );
}