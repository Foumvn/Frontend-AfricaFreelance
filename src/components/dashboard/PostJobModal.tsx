'use client'

import { useState } from 'react'

interface JobFormData {
  title: string
  description: string
  category: string
  budgetMin: string
  budgetMax: string
  duration: string
  skills: string[]
  country: string
  attachment: boolean
}

const categories = [
  'Web Development',
  'Mobile Development',
  'UI/UX Design',
  'Digital Marketing',
  'Writing & Translation',
  'Data Science',
  'DevOps & Cloud',
  'Video & Animation',
]

const countries = [
  'Nigeria',
  'Kenya',
  'Ghana',
  'South Africa',
  'Egypt',
  'Senegal',
  'Ivory Coast',
  'Remote',
]

const popularSkills = [
  'React', 'Node.js', 'Python', 'Figma', 'WordPress',
  'Shopify', 'Flutter', 'AWS', 'MongoDB', 'PostgreSQL',
  'Vue.js', 'Laravel', 'Django', 'Swift', 'Kotlin'
]

export default function PostJobModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState<JobFormData>({
    title: '',
    description: '',
    category: '',
    budgetMin: '',
    budgetMax: '',
    duration: '',
    skills: [],
    country: '',
    attachment: false,
  })
  const [currentStep, setCurrentStep] = useState(1)

  if (!isOpen) return null

  const handleSkillToggle = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }))
  }

  const handleSubmit = () => {
    console.log('Job posted:', formData)
    alert('Job posted successfully!')
    onClose()
  }

  const isStep1Valid = formData.title && formData.description && formData.category && formData.country
  const isStep2Valid = formData.budgetMin && formData.budgetMax

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
        
        <div className="relative bg-white dark:bg-background-dark rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-hidden">
          <div className="sticky top-0 bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 p-6 z-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Post a New Job</h2>
              <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${currentStep >= 1 ? 'bg-primary text-slate-900' : 'bg-slate-200 dark:bg-slate-700'}`}>1</div>
                <span className={`text-sm font-medium ${currentStep >= 1 ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>Details</span>
              </div>
              <div className="flex-1 h-0.5 bg-slate-200 dark:bg-slate-700"></div>
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${currentStep >= 2 ? 'bg-primary text-slate-900' : 'bg-slate-200 dark:bg-slate-700'}`}>2</div>
                <span className={`text-sm font-medium ${currentStep >= 2 ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>Budget</span>
              </div>
              <div className="flex-1 h-0.5 bg-slate-200 dark:bg-slate-700"></div>
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${currentStep >= 3 ? 'bg-primary text-slate-900' : 'bg-slate-200 dark:bg-slate-700'}`}>3</div>
                <span className={`text-sm font-medium ${currentStep >= 3 ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>Skills</span>
              </div>
            </div>
          </div>

          <div className="p-6 overflow-y-auto max-h-[calc(90vh-180px)]">
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Job Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. E-commerce Platform Development"
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Describe your project requirements in detail..."
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Category <span className="text-red-500">*</span>
                    </label>
                    <select
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    >
                      <option value="">Select a category</option>
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Location <span className="text-red-500">*</span>
                    </label>
                    <select
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    >
                      <option value="">Select country</option>
                      {countries.map(country => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Project Duration
                  </label>
                  <select
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  >
                    <option value="">Select duration</option>
                    <option value="less-than-week">Less than a week</option>
                    <option value="1-2-weeks">1-2 weeks</option>
                    <option value="1-month">1 month</option>
                    <option value="1-3-months">1-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="more-than-6">More than 6 months</option>
                  </select>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">info</span>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      Set a competitive budget to attract top talent. A 5% service fee applies.
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Budget Range (USD) <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                      <input
                        type="number"
                        placeholder="Min"
                        className="w-full pl-8 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                        value={formData.budgetMin}
                        onChange={(e) => setFormData({ ...formData, budgetMin: e.target.value })}
                      />
                    </div>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                      <input
                        type="number"
                        placeholder="Max"
                        className="w-full pl-8 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                        value={formData.budgetMax}
                        onChange={(e) => setFormData({ ...formData, budgetMax: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 text-center">
                    <p className="text-sm text-slate-500 mb-1">Service Fee (5%)</p>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">
                      ${formData.budgetMax ? (parseFloat(formData.budgetMax) * 0.05).toFixed(2) : '0.00'}
                    </p>
                  </div>
                  <div className="bg-primary/10 rounded-xl p-4 text-center border border-primary/20">
                    <p className="text-sm text-slate-500 mb-1">Total to Pay</p>
                    <p className="text-2xl font-bold text-primary">
                      ${formData.budgetMax ? (parseFloat(formData.budgetMax) * 1.05).toFixed(2) : '0.00'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl">
                  <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400">verified</span>
                  <div>
                    <p className="font-semibold text-emerald-800 dark:text-emerald-300">Escrow Protected</p>
                    <p className="text-sm text-emerald-600 dark:text-emerald-400">Funds are held securely until you approve the work</p>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                    Required Skills <span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {popularSkills.map(skill => (
                      <button
                        key={skill}
                        onClick={() => handleSkillToggle(skill)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          formData.skills.includes(skill)
                            ? 'bg-primary text-slate-900'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                        }`}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                  {formData.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {formData.skills.map(skill => (
                        <span key={skill} className="inline-flex items-center gap-1 px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                          {skill}
                          <button onClick={() => handleSkillToggle(skill)} className="hover:text-primary/70">
                            <span className="material-symbols-outlined text-sm">close</span>
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <input
                    type="checkbox"
                    id="attachment"
                    className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary"
                    checked={formData.attachment}
                    onChange={(e) => setFormData({ ...formData, attachment: e.target.checked })}
                  />
                  <label htmlFor="attachment" className="text-sm text-slate-700 dark:text-slate-300">
                    Allow freelancers to attach portfolio samples
                  </label>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Job Title</span>
                      <span className="font-medium text-slate-900 dark:text-white">{formData.title || '-'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Category</span>
                      <span className="font-medium text-slate-900 dark:text-white">{formData.category || '-'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Budget</span>
                      <span className="font-medium text-primary">
                        ${formData.budgetMin || 0} - ${formData.budgetMax || 0}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Skills</span>
                      <span className="font-medium text-slate-900 dark:text-white">
                        {formData.skills.length > 0 ? formData.skills.join(', ') : '-'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="sticky bottom-0 bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 p-6 flex justify-between">
            <button
              onClick={() => currentStep > 1 ? setCurrentStep(currentStep - 1) : onClose()}
              className="px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              {currentStep > 1 ? 'Previous' : 'Cancel'}
            </button>
            
            {currentStep < 3 ? (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                disabled={currentStep === 1 ? !isStep1Valid : !isStep2Valid}
                className="px-6 py-3 bg-primary text-slate-900 font-bold rounded-xl hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                Next Step
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={formData.skills.length === 0}
                className="px-6 py-3 bg-primary text-slate-900 font-bold rounded-xl hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <span className="material-symbols-outlined">publish</span>
                Post Job Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
