import Link from 'next/link'
import { useRouter } from 'next/router'
import FormSuccess from '../components/FormSuccess'

export default function Contact() {
  const router = useRouter()
  const isFormSuccess = !!router.query.success;

  return (
    <>
      <div className="relative bg-black">
        <div className="hidden lg:block lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img className="h-56 w-full object-cover lg:absolute lg:h-full" src="/images/pexels-photo-3379942.jpg" alt="" />
          </div>
        </div>
        <div className="relative pt-0 pb-16 px-4 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
              <div className="flex py-9 sm:py-10 mb-12 items-center">
                <Link href="/">
                  <a>
                    <img className="h-8 w-auto" src="/images/vizee-logo-text.svg" alt="Vizee" />
                  </a>
                </Link>
              </div>
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-gray-100">
                Let's talk.
              </h2>
              <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                We have custom plans to power your video business. Tell us your needs, and we'll contact you shortly.
              </p>
              <form name="vizee-contact" method="POST" action="/contact?success=true" data-netlify="true" className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <input type="hidden" name="form-name" value="vizee-contact" />
                <div>
                  <label htmlFor="first_name" className="block text-sm font-medium text-gray-300">First name</label>
                  <div className="mt-1">
                    <input type="text" name="first_name" id="first_name" autoComplete="given-name" className="block w-full bg-black shadow-sm sm:text-sm text-white focus:ring-pink-500 focus:border-pink-500 border-gray-700 rounded-md" />
                  </div>
                </div>
                <div>
                  <label htmlFor="last_name" className="block text-sm font-medium text-gray-300">Last name</label>
                  <div className="mt-1">
                    <input type="text" name="last_name" id="last_name" autoComplete="family-name" className="block w-full bg-black shadow-sm sm:text-sm text-white focus:ring-pink-500 focus:border-pink-500 border-gray-700 rounded-md" />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                  <div className="mt-1">
                    <input id="email" name="email" type="email" autoComplete="email" className="block w-full bg-black shadow-sm sm:text-sm text-white focus:ring-pink-500 focus:border-pink-500 border-gray-700 rounded-md" />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone</label>
                    <span id="phone_description" className="text-sm text-gray-500">Optional</span>
                  </div>
                  <div className="mt-1">
                    <input type="text" name="phone" id="phone" autoComplete="tel" aria-describedby="phone_description" className="block w-full bg-black shadow-sm sm:text-sm text-white focus:ring-pink-500 focus:border-pink-500 border-gray-700 rounded-md" />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label htmlFor="how_can_we_help" className="block text-sm font-medium text-gray-300">Message</label>
                    <span id="how_can_we_help_description" className="text-sm text-gray-500">Max. 500 characters</span>
                  </div>
                  <div className="mt-1">
                    <textarea id="how_can_we_help" name="how_can_we_help" aria-describedby="how_can_we_help_description" rows="4" className="block w-full bg-black shadow-sm sm:text-sm text-white focus:ring-pink-500 focus:border-pink-500 border-gray-700 rounded-md"></textarea>
                  </div>
                </div>
                <fieldset className="sm:col-span-2">
                  <legend className="block text-sm font-medium text-gray-300">
                    Expected budget
                  </legend>
                  <div className="mt-4 grid grid-cols-1 gap-y-4">
                    <div className="flex items-center">
                      <input id="budget_under_25k" name="budget" value="under_25k" type="radio" className="focus:ring-pink-500 focus:ring-offset-black h-4 w-4 text-pink-600 border-gray-700" />
                      <label htmlFor="budget_under_25k" className="ml-3">
                        <span className="block text-sm text-gray-300">Less than $25K</span>
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input id="budget_25k-50k" name="budget" value="25k-50k" type="radio" className="focus:ring-pink-500 focus:ring-offset-black h-4 w-4 text-pink-600 border-gray-700" />
                      <label htmlFor="budget_25k-50k" className="ml-3">
                        <span className="block text-sm text-gray-300">$25K – $50K</span>
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input id="budget_50k-100k" name="budget" value="50k-100k" type="radio" className="focus:ring-pink-500 focus:ring-offset-black h-4 w-4 text-pink-600 border-gray-700" />
                      <label htmlFor="budget_50k-100k" className="ml-3">
                        <span className="block text-sm text-gray-300">$50K – $100K</span>
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input id="budget_over_100k" name="budget" value="over_100k" type="radio" className="focus:ring-pink-500 focus:ring-offset-black h-4 w-4 text-pink-600 border-gray-700" />
                      <label htmlFor="budget_over_100k" className="ml-3">
                        <span className="block text-sm text-gray-300">$100K+</span>
                      </label>
                    </div>
                  </div>
                </fieldset>
                <div className="sm:col-span-2">
                  <label htmlFor="how_did_you_hear_about_us" className="block text-sm font-medium text-gray-300">How did you hear about us?</label>
                  <div className="mt-1">
                    <input type="text" name="how_did_you_hear_about_us" id="how_did_you_hear_about_us" className="bg-black shadow-sm focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-700 rounded-md" />
                  </div>
                </div>
                <div className="my-4 sm:col-span-2">
                  <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                    Contact us
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <FormSuccess isOpen={isFormSuccess} />
    </>
  )
}
